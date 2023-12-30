import * as crypto from 'crypto';

function sha256(data: Buffer): Buffer {
  return crypto.createHash('sha256').update(data).digest();
}

function ripemd160(data: Buffer): Buffer {
  return crypto.createHash('ripemd160').update(data).digest();
}

function generatePrivateKey(): Buffer {
  return crypto.randomBytes(32);
}

function generatePublicKey(privateKey: Buffer): Buffer {
  const ec = crypto.createECDH('secp256k1');
  ec.setPrivateKey(privateKey);
  return Buffer.from(ec.getPublicKey(null, 'compressed'));
}

function generateLegacyBitcoinAddress(publicKey: Buffer): string {
  const sha256Hash1 = sha256(publicKey);
  const ripemd160Hash = ripemd160(sha256Hash1);

  // Version byte for Mainnet: 0x00
  const versionByte = Buffer.from([0x00]);

  // Add version byte to ripemd160 hash
  const extendedRipemd160Hash = Buffer.concat([versionByte, ripemd160Hash]);

  // Perform double SHA-256 hashing
  const sha256Hash2 = sha256(sha256(extendedRipemd160Hash));

  // Take the first 4 bytes as a checksum
  const checksum = sha256Hash2.slice(0, 4);

  // Concatenate the extended ripemd160 hash and checksum
  const binaryAddress = Buffer.concat([extendedRipemd160Hash, checksum]);

  // Base58 encode the binary address
  const base58Address = encodeBase58(binaryAddress);

  return base58Address;
}

function encodeBase58(data: Buffer): string {
  const base58Chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let value = BigInt('0x' + data.toString('hex'));

  let result = '';
  const big58 = BigInt(58);
  while (value > BigInt(0)) {
    const remainder = value % big58;
    value = value / big58;

    result = base58Chars.charAt(Number(remainder)) + result;
  }

  // Add '1' characters for leading zero bytes
  for (let i = 0; i < data.length && data[i] === 0; i++) {
    result = '1' + result;
  }

  return result;
}

export const generateNewBitcoinAdress = () => {
  const privateKey = generatePrivateKey();
  const publicKey = generatePublicKey(privateKey);
  return generateLegacyBitcoinAddress(publicKey);
};

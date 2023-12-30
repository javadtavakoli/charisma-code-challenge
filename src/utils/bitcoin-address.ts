async function sha256(buffer: ArrayBuffer): Promise<ArrayBuffer> {
  return crypto.subtle.digest('SHA-256', buffer);
}

export async function generateBitcoinAddress(): Promise<string> {
  const privateKey = await crypto.subtle.generateKey(
    {
      name: 'ECDSA',
      namedCurve: 'P-256'
    },
    true,
    ['sign', 'verify']
  );

  // Get the public key from the private key
  const publicKey = await crypto.subtle.exportKey('spki', privateKey.publicKey);

  // Perform SHA-256 hash on the public key
  const hashBuffer = await sha256(publicKey);

  // Perform RIPEMD-160 hash on the SHA-256 hash
  const ripemd160Hash = new Uint8Array(await crypto.subtle.digest('RIPEMD-160', hashBuffer));

  // Add the version byte (0x00 for Mainnet) to the beginning of the RIPEMD-160 hash
  const extendedRipemd160Hash = new Uint8Array(1 + ripemd160Hash.length);
  extendedRipemd160Hash.set([0x00], 0);
  extendedRipemd160Hash.set(ripemd160Hash, 1);
  // Perform SHA-256 hash on the extended RIPEMD-160 hash
  const hashBuffer2 = await sha256(extendedRipemd160Hash);

  // Perform SHA-256 hash on the result of the previous SHA-256 hash
  const hashBuffer3 = await sha256(new Uint8Array(hashBuffer2));

  // Take the first 4 bytes of the result and add them to the end of the extended RIPEMD-160 hash
  const checksum = new Uint8Array(hashBuffer3.slice(0, 4));
  const extendedRipemd160HashWithChecksum = new Uint8Array(
    extendedRipemd160Hash.length + checksum.length
  );
  for (let i = 0; i < extendedRipemd160Hash.length; i++) {
    extendedRipemd160HashWithChecksum[i] = extendedRipemd160Hash[i];
  }
  for (let j = 0; j < checksum.length; j++) {
    extendedRipemd160HashWithChecksum[extendedRipemd160Hash.length + j] = checksum[j];
  }
  // Encode the extended RIPEMD-160 hash with checksum in Base58Check
  const base58CheckEncoded = encodeBase58Check(extendedRipemd160HashWithChecksum);

  return base58CheckEncoded;
}

function encodeBase58Check(data: Uint8Array): string {
  // Base58 characters (excluding 0, O, I, and l)
  const base58Chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

  // Perform Base58Check encoding
  const leadingZeros = data.findIndex((byte) => byte !== 0);
  const encoded = Array.from(data)
    .reverse()
    .map((byte) => base58Chars[byte])
    .join('');

  return '1'.repeat(leadingZeros) + encoded;
}

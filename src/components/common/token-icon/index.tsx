import TokenIconStyles from './index.styles';

interface TokenIconProps {
  children: string;
}
const TokenIcon = (props: TokenIconProps) => {
  const { TokenIcon } = TokenIconStyles;
  return <TokenIcon>{props.children}</TokenIcon>;
};
export default TokenIcon;

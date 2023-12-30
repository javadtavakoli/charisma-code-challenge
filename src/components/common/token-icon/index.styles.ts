import styled from 'styled-components';

const TokenIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.0625rem;
  height: 3.0625rem;
  border-radius: 2.7125rem;
  opacity: 0.5858;
  background: ${(props) => props.theme.colors.icon_back};
  color: ${(props) => props.theme.colors.primary_text};
  font-size: 0.8125rem;
  font-weight: 500;
  font-style: normal;

  line-height: normal;
  box-shadow: -4px -4px 10px 0px rgba(58, 58, 58, 0.93), 4px 4px 10px 0px rgba(0, 0, 0, 0.52);
`;
const TokenIconStyles = {
  TokenIcon
};
export default TokenIconStyles;

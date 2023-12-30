import styled from 'styled-components';

const Input = styled.input`
  background: ${(props) => props.theme.colors.input_back};
  border-radius: 2.7125rem;
  font-size: 0.9375rem;
  width: 100%;
  padding: 0.81rem 1.88rem 1.19rem 1.88rem;
  color: ${(props) => props.theme.colors.primary_text};
  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
  outline: none;
  border: none;
  box-shadow: 4px 4px 10px 0px #000 inset, -4px -4px 10px 0px rgba(58, 58, 58, 0.89) inset;
`;
const TextInputStyles = { Input };
export default TextInputStyles;

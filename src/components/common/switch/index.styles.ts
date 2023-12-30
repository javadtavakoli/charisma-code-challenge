import styled, { css } from 'styled-components';
const inactiveMixin = css`
  content: '';
  position: absolute;
  display: block;
`;
const beforeAnimation = css`
  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
`;
const afterAnimation = css`
  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
`;

const Wrapper = styled.div`
  & input {
    opacity: 0; // hides checkbox
    position: absolute;
    & + label {
      box-shadow: -4px -4px 10px 0px rgba(58, 58, 58, 0.93), 4px 4px 10px 0px rgba(0, 0, 0, 0.52),
        4px 4px 10px 0px rgba(0, 0, 0, 0.86) inset, -4px -4px 10px 0px rgba(58, 58, 58, 0.69) inset;
      position: relative;
      display: inline-block;
      user-select: none;
      transition: 0.4s ease;
      width: 3.1875rem;
      height: 1.625rem;
      border-radius: 2.7125rem;
      &:before {
        ${inactiveMixin}
        ${beforeAnimation}
        width: 3.1875rem;
        height: 1.625rem;
        top: 0;
        left: 0;
        border-radius: calc(2.7125rem / 2);
      }
      &:after {
        ${inactiveMixin}
        ${afterAnimation}
        background: ${(props) => props.theme.colors.inactive_switch};
        height: calc(3.1875rem / 2);
        width: calc(3.1875rem / 2);
        top: 0;
        left: 0;
        border-radius: calc(2.7125rem / 2);
      }
    }
    // When Active
    &:checked {
      & + label:before {
        transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
      }
      & + label:after {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        background: ${(props) => props.theme.colors.active_switch};
        left: 1.59375rem;
      }
    }
  }
`;
const SwitchStyles = { Wrapper };
export default SwitchStyles;

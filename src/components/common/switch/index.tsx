import SwitchStyles from './index.styles';
interface SwitchProps {
  name: string;
}
const Switch = (props: SwitchProps) => {
  const { Wrapper } = SwitchStyles;
  return (
    <Wrapper>
      <input type="checkbox" name={props.name} id={props.name} />
      <label htmlFor={props.name}></label>
    </Wrapper>
  );
};
export default Switch;

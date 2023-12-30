import SwitchStyles from './index.styles';
interface SwitchProps {
  name: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}
const Switch = (props: SwitchProps) => {
  const { Wrapper } = SwitchStyles;
  return (
    <Wrapper>
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.checked)}
      />
      <label htmlFor={props.name}></label>
    </Wrapper>
  );
};
export default Switch;

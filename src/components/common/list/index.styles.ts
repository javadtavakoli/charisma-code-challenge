import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  flex: 1;
  width: 100%;
  border-radius: 2.7125rem;
  box-shadow: -4px -4px 10px 0px rgba(31, 31, 31, 0.93), 4px 4px 10px 0px rgba(0, 0, 0, 0.52),
    4px 4px 10px 0px rgba(0, 0, 0, 0.86) inset, -4px -4px 10px 0px rgba(22, 22, 22, 0.69) inset;
`;
const Item = styled.li`
  padding: 1.56rem 1.44rem;
  margin: 0;
  &:not(:last-child) {
    position: relative;
    ::after {
      position: absolute;
      content: ' ';
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.0625rem;
      background: #282828;
      filter: drop-shadow(0px -4px 0px #000) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
`;
const TableStyles = {
  List,
  Item
};
export default TableStyles;

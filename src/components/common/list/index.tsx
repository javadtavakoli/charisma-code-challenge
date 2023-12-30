import { ReactNode } from 'react';
import ListStyles from './index.styles';
interface ListItem {
  body: ReactNode;
  id: string;
}
interface ListProps {
  children: ListItem[];
}
const List = (props: ListProps) => {
  const { List, Item } = ListStyles;
  return (
    <List>
      {props.children.map((item) => (
        <Item key={item.id}>{item.body}</Item>
      ))}
    </List>
  );
};

export default List;

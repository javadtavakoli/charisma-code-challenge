import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2.8rem;
  max-width: 45rem;
  max-height: 100%;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.p`
  margin-right: 0.81rem;
  color: ${(props) => props.theme.colors.primary_text};
`;
const SwitchHolder = styled.div`
  margin-right: auto;
`;
const ManageTokenStyles = {
  Container,
  Row,
  Name,
  SwitchHolder
};
export default ManageTokenStyles;

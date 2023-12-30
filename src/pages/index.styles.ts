import { default as NextLink } from 'next/link';
import styled from 'styled-components';
const Heading = styled.h4`
  margin-bottom: 2rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.p`
  margin-right: 0.81rem;
  color: ${(props) => props.theme.colors.primary_text};
`;
const Address = styled.p`
  color: ${(props) => props.theme.colors.primary_text};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: normal;
  max-width: 8.1875rem;
  word-wrap: break-word;
  text-align: left;
  margin-right: auto;
`;
const Link = styled(NextLink)`
  color: ${(props) => props.theme.colors.primary_text};
  font-size: 0.9375rem;
  text-decoration: none;
  text-align: center;
  display: block;
  margin-top: 1rem;
`;
const DashboardStyles = {
  Heading,
  Row,
  Name,
  Address,
  Link
};
export default DashboardStyles;

import styled from "styled-components";
interface Props {
  isSuccess: boolean;
}
export const StyledFormModal = styled.div<Props>`
  background-color: white;

  border-radius: 5px;
  width: 400px;
  height: 300px;

  color: ${(props) =>
    props.isSuccess ? props.theme.success : props.theme.danger};
`;

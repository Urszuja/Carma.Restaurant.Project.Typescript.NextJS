import styled from "styled-components";
import { IFormModal } from "./FormModal";

export const StyledFormModal = styled.div<IFormModal>`
  color: ${(p) => (p.isSuccess ? p.theme.success : p.theme.danger)};
  .advertisement {
    display: flex;
    justify-content: space between;
    align-items: center;
  }
`;

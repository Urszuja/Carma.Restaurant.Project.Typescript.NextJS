import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.main};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 10px 10px;
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 150px;
  bottom: 0;
  p,
  h4 {
    margin: 0;
    padding: 0;
  }
  h4 {
    margin-bottom: 10px;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .left {
    align-items: flex-start;
    justify-content: flex-start;
    .details {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 10px;
    }
  }

  .middle {
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    .trip-advisor {
      filter: invert(100%);
    }
  }

  .right {
    align-items: flex-end;
    justify-content: space-between;
    font-size: small;

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .link {
      text-decoration: underline;
    }
    .social-media {
      display: flex;
      margin-top: 10px;
      gap: 5px;
    }
  }
`;

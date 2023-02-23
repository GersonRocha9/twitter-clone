import styled from "styled-components";

export const ContentContainer = styled.main`
  border-left: 1px solid #ebeef0;
  border-right: 1px solid #ebeef0;

  header {
    padding: 1.5rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid #ebeef0;
  }

  form {
    padding: 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      display: flex;
      gap: 0.75rem;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }

      textarea {
        flex: 1;
        border: 0;
        font-size: 1.25rem;
        font-weight: 500;
        margin-top: 0.75rem;
        resize: none;

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: #5b7083;
        }
      }
    }

    button {
      margin-left: auto;
    }
  }

  .separator {
    background: #f7f9fa;
    border-top: 1px solid #ebeef0;
    border-bottom: 1px solid #ebeef0;
    height: 0.75rem;
  }
`;

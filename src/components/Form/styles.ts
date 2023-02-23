import styled from "styled-components";

export const FormContainer = styled.form`
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
`;

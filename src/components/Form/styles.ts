import styled from "styled-components";

interface FormProps {
  isAnswer?: boolean;
}

export const FormContainer = styled.form<FormProps>`
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: ${({ isAnswer }) => isAnswer && "1px solid #ebeef0"};

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
        color: ${({ theme }) => theme.colors.gray.dark};
      }
    }
  }

  button {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    label {
      textarea {
        font-size: 1rem;
      }
    }
  }
`;

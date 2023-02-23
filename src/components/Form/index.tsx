import { Button } from "../../components";
import { FormContainer } from "./styles";

interface FormProps {
  placeholder: string;
  imgSrc: string;
  imgAlt: string;
  isAnswer?: boolean;
}

export const Form = ({
  placeholder,
  imgSrc,
  imgAlt,
  isAnswer = false,
}: FormProps) => {
  return (
    <FormContainer>
      <label htmlFor="tweet">
        <img src={imgSrc} alt={imgAlt} />
        <textarea id="tweet" placeholder={placeholder} />

        {isAnswer && <Button width="120px" type="submit" label="Answer" />}
      </label>

      {!isAnswer && <Button width="120px" type="submit" label="Tweet" />}
    </FormContainer>
  );
};

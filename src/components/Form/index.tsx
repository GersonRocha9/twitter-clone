import { Button } from "../../components";
import { FormContainer } from "./styles";

interface FormProps {
  placeholder: string;
  imgSrc: string;
  imgAlt: string;
}

export const Form = ({ placeholder, imgSrc, imgAlt }: FormProps) => {
  return (
    <FormContainer>
      <label htmlFor="tweet">
        <img src={imgSrc} alt={imgAlt} />
        <textarea id="tweet" placeholder={placeholder} />
      </label>

      <Button width="120px" type="submit" label="Tweet" />
    </FormContainer>
  );
};

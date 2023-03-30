import { ErrorComponent } from "./ErrorComponent";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startGettingInfo } from "../store/thunks";

const initialForm = {
  ip: "",
};

export const FormComponent = () => {
  const { ip, onInputChange } = useForm(initialForm);
  const [errorText, setErrorText] = useState("");
  const dispatch = useDispatch();

  const onButtonGet = (e) => {
    e.preventDefault();
    var patronIp = new RegExp(
      "^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$"
    );
    var valores;

    if (ip.search(patronIp) !== 0) {
      setErrorText("You must enter a valid IP to continue.");
    }

    valores = ip.split(".");

    if (
      valores[0] <= 255 &&
      valores[1] <= 255 &&
      valores[2] <= 255 &&
      valores[3] <= 255
    ) {
      if (errorText.length > 0) setErrorText("");
      dispatch(startGettingInfo(ip));
    } else {
      setErrorText("You must enter a valid IP to continue.");
    }
  };

  return (
    <form>
      <h2 className="container-title">Enter any IPv4 address</h2>

      <input
        className="container-input"
        type="text"
        placeholder="127.0.0.1"
        onChange={onInputChange}
        name="ip"
        value={ip}
      />

      <button onClick={onButtonGet} className="container-submit">
        GET INFORMATION
      </button>

      <ErrorComponent text={errorText} />
    </form>
  );
};

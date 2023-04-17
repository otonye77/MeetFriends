import InputWithLabels from "../../shared/components/inputWithLabels";

const LoginPageInput = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter email address"
      />
      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
};

export default LoginPageInput;

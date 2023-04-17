import InputWithLabels from "../../shared/components/inputWithLabels";

const RegisterPageInput = (props) => {
  const { mail, setMail, username, setUserName, password, setPassword } = props;
  return (
    <>
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="Email Address"
        type="text"
        placeholder="Enter Email Address"
      />
      <InputWithLabels
        value={username}
        setValue={setUserName}
        label="Enter Username"
        type="text"
        placeholder="Enter Username"
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

export default RegisterPageInput;

import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthBox from "../../shared/components/authBox";
import RegisterPageInput from "./registerPageInput";
import RegisterPageFooter from "./registerPageFooter";
import { validateRegisterForm } from "../../shared/utils/validator";

const RegisterPage = () => {
  const [mail, setMail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log("REGISTERING");
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm({
      mail,
      username,
      password
    }))
  }, [mail, username, password])

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInput
        mail={mail}
        setMail={setMail}
        username={username}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default RegisterPage;

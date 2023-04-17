import { useState, useEffect } from "react";
import AuthBox from "../../shared/components/authBox";
import LoginPageHeader from "./loginPageHeader";
import LoginPageInput from "./loginPageInput";
import LoginPageFooter from "./loginPageFooter";
import { validateLoginForm } from "../../shared/utils/validator";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({mail, password}))
  }, [mail, password, setIsFormValid])

  const handleLogin = () => {
    console.log("LOGING IN");
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;

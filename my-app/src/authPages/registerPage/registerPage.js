import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthBox from "../../shared/components/authBox";
import RegisterPageInput from "./registerPageInput";
import RegisterPageFooter from "./registerPageFooter";
import { validateRegisterForm } from "../../shared/utils/validator";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authAction";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ register }) => {
  const [mail, setMail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      mail,
      username,
      password,
    };
    register(userDetails, history);
  };

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password]);

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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);

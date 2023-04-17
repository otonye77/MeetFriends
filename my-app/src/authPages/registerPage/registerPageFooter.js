import CustomPrimaryButton from "../../shared/components/customPrimaryButton";
import RedirectInfo from "../../shared/components/redirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Enter username and password";
};

const getFormValidMessage = () => {
  return "Press to Register";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account? "
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLogin}
      />
    </>
  );
};
export default RegisterPageFooter;

export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({mail, username, password}) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  const isUserNameValid = validateUsername(username)
  return isMailValid && isPasswordValid && isUserNameValid
}

const validatePassword = (password) => {
  return password.length > 5 && password.length < 12;
};

const validateUsername = (username) => {
  return username.length > 0
}

const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

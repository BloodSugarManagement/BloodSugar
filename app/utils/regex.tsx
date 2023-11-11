const EMAIL_CHECK =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,6}$/i;

const PASSWORD_CHECK = /^(?=.*\d).{8,}$/;

const regex = {
  EMAIL_CHECK,
  PASSWORD_CHECK,
};

export default regex;

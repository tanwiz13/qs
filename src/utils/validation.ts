export const ERRORS = {
  PASSWORD_ERROR_SPECIAL: 'At least one special character',
  PASSWORD_ERROR_LOWERCASE: 'At least one lower case letter',
  PASSWORD_ERROR_UPPERCASE: 'At least one upper case letter',
  PASSWORD_ERROR_NUMERIC: 'At least one numeric character',
  PASSWORD_ERROR_BLANK: 'No white spaces or blanks allowed',
  PASSWORD_ERROR_INCORRECT: 'Current password is incorrect',
  PASSWORD_ERROR_MATCH: 'New passwords do not match',
  PASSWORD_ERROR_IDENTICAL:
    'Current password and new password cannot be identical',
  PASSWORD_ERROR_LENGTH: 'Password must be between 10-32 characters long',
};
const validateEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password: string) => password && password.length >= 6;

const validateName = (name: string) => name && name.length > 0;

const validatePasswordSecure = (password: string) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{10,32}$/;

  if (!regex.test(password)) {
    const messages: string[] = [];

    if (password.length < 10 || password.length > 32) {
      messages.push(ERRORS.PASSWORD_ERROR_LENGTH);
    }
    if (!/[a-z]/.test(password)) {
      messages.push(ERRORS.PASSWORD_ERROR_LOWERCASE);
    }
    if (!/[A-Z]/.test(password)) {
      messages.push(ERRORS.PASSWORD_ERROR_UPPERCASE);
    }
    if (!/\d/.test(password)) {
      messages.push(ERRORS.PASSWORD_ERROR_NUMERIC);
    }
    if (!/[@#$%^&+=]/.test(password)) {
      messages.push(ERRORS.PASSWORD_ERROR_SPECIAL + ' (@#$%^&+=)');
    }
    if (/\s/.test(password)) {
      messages.push(ERRORS.PASSWORD_ERROR_BLANK);
    }

    return messages.join('.\u00A0');
  }

  return '';
};

export default {
  validateEmail,
  validatePassword,
  validateName,
  validatePasswordSecure,
};

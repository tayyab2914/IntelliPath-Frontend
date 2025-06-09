import { EMAIL_RULES_REQUIRED, NAME_RULES_REQUIRED, PASSWORD_RULES_REQUIRED, VALIDATE_CONFIRM_PASSWORD } from "../../../utils/Rules";

export const formRules = {
  email: EMAIL_RULES_REQUIRED,
  name: NAME_RULES_REQUIRED,
  password: PASSWORD_RULES_REQUIRED,
  confirmPassword: VALIDATE_CONFIRM_PASSWORD
};

export const authStates = {
  EMAIL_INPUT: 'email-input',
  VERIFICATION_CODE: 'verification-code',
  NEW_PASSWORD: 'new-password'
}; 
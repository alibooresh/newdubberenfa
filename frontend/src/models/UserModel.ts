export interface UserModel {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  isSuperUser?: boolean;
}
export interface RegisterUserDTO {
  username: string;
  email: string;
  password: string;
}
export interface SignUserDTO {
  email: string;
  password: string;
}
export interface TokenDTO {
  token: string;
}

export interface User {
  username: string;
  displayName: string;
  token: string;
}

export interface LoginInfo {
  username: string;
  password: string;
}

export interface RegisterInfo {
  username: string;
  password: string;
  email: string;
}
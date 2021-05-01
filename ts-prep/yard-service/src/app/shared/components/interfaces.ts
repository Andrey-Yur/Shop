export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
  registered?: boolean;
}

export interface Order {
  client: string;
  phone: string;
  objectName: string;
  workOrder: string;
  completed: boolean;
  descr: string;
  date: Date;
}

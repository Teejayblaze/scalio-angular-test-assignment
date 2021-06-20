export class Users {
  avatar_url: string;
  login: string;
  type: string;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}

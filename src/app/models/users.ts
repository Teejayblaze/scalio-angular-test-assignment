export class Users {
  avatar_url: string;
  login: string;
  type: string;

  constructor(avatar_url, login, type) {
    this.avatar_url = avatar_url;
    this.login = login;
    this.type = type;
  }
}

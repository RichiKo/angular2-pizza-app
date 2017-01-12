export class AuthToken {

  public static fromJson(data: any): AuthToken {
    return new AuthToken(data.succes, data.token);
  }

  constructor(private _success: boolean, private _token: string) {
  }

  get success(): boolean {
    return this._success;
  }

  get token(): string {
    return this._token;
  }

  set success(value: boolean) {
    this._success = value;
  }

  set token(value: string) {
    this._token = value;
  }
}


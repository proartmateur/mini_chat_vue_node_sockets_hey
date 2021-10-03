export class MessageDTO {
  constructor(
    private _id: string,
    private _user_name: string,
    private _content: string,
    private _time: string,
    private _date: string) {
  }


  get id(): string {
    return this._id
  }

  get user_name(): string {
    return this._user_name
  }

  get content(): string {
    return this._content
  }

  get time(): string {
    return this._time
  }

  get date(): string {
    return this._date
  }
}

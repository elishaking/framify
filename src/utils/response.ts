export class ErrorResponse {
  constructor(
    public status: number,
    public message: string,
    public success = false
  ) {}
}

export class DataResponse {
  constructor(
    public status: number,
    public data: any,
    public message?: string,
    public success = true
  ) {}
}

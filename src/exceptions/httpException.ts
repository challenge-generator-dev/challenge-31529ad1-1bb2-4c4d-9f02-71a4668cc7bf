export class HttpException extends Error {
  public readonly statusCode: number;
  public readonly errorCode?: string;
  public readonly timestamp: Date;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    statusCode: number,
    errorCode?: string,
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.timestamp = new Date();
    this.isOperational = isOperational;

    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  public toJSON(): object {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      timestamp: this.timestamp.toISOString(),
      isOperational: this.isOperational,
    };
  }

  public static isHttpException(error: unknown): error is HttpException {
    return error instanceof HttpException;
  }

  public getHttpStatusText(): string {
    const statusTexts: Record<number, string> = {
      400: 'Bad Request',
      401: 'Unauthorized',
      403: 'Forbidden',
      404: 'Not Found',
      409: 'Conflict',
      422: 'Unprocessable Entity',
      500: 'Internal Server Error',
    };
    return statusTexts[this.statusCode] || 'Unknown Error';
  }

  public getFullMessage(): string {
    return `[${this.statusCode} ${this.getHttpStatusText()}]: ${this.message}`;
  }
}
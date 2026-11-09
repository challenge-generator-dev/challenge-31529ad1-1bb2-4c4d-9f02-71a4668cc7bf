import { HttpException } from './httpException';

export class NegativePriceException extends HttpException {
  public readonly providedPrice: number;
  public readonly absoluteValue: number;
  public readonly productName?: string;
  public readonly minValidPrice: number;

  constructor(
    providedPrice: number,
    productName?: string,
    message?: string
  ) {
    const defaultMessage = message 
      || `El precio no puede ser negativo. Valor recibido: ${providedPrice}`;
    
    super(defaultMessage, 400, 'NEGATIVE_PRICE', true);
    
    this.providedPrice = providedPrice;
    this.absoluteValue = Math.abs(providedPrice);
    this.productName = productName;
    this.minValidPrice = 0;
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      providedPrice: this.providedPrice,
      absoluteValue: this.absoluteValue,
      productName: this.productName,
      minValidPrice: this.minValidPrice,
    };
  }

  public getValidationError(): string {
    const productInfo = this.productName ? ` para el producto '${this.productName}'` : '';
    return `Validación fallida${productInfo}: el precio ${this.providedPrice} es menor que el mínimo permitido (${this.minValidPrice})`;
  }

  public static isNegativePriceException(error: unknown): error is NegativePriceException {
    return error instanceof NegativePriceException;
  }

  public getCorrectionSuggestion(): string {
    if (this.providedPrice < 0) {
      return `Utilice el valor absoluto (${this.absoluteValue}) o un precio válido mayor o igual a 0`;
    }
    return 'Proporcione un precio válido mayor o igual a 0';
  }

  public getErrorContext(): Record<string, unknown> {
    return {
      errorType: 'NegativePrice',
      providedValue: this.providedPrice,
      absoluteValue: this.absoluteValue,
      minAllowed: this.minValidPrice,
      productName: this.productName,
      httpMethod: 'POST',
      endpoint: '/products',
      suggestion: this.getCorrectionSuggestion(),
    };
  }

  public static validatePrice(price: number, productName?: string): void {
    if (typeof price !== 'number' || isNaN(price)) {
      throw new NegativePriceException(price, productName, 'El precio debe ser un número válido');
    }
    if (price < 0) {
      throw new NegativePriceException(price, productName);
    }
  }
}
import { HttpException } from './httpException';

export class DuplicateProductException extends HttpException {
  public readonly productName: string;
  public readonly existingProductId?: string;
  public readonly suggestedAlternatives?: string[];

  constructor(
    productName: string,
    existingProductId?: string,
    message?: string
  ) {
    const defaultMessage = message || `El producto con nombre '${productName}' ya existe en el catálogo`;
    super(defaultMessage, 409, 'DUPLICATE_PRODUCT', true);
    
    this.productName = productName;
    this.existingProductId = existingProductId;
    this.suggestedAlternatives = this.generateAlternatives(productName);
  }

  private generateAlternatives(name: string): string[] {
    const alternatives: string[] = [];
    const baseName = name.trim();
    
    alternatives.push(`${baseName} (Original)`);
    alternatives.push(`${baseName} - Versión Actualizada`);
    alternatives.push(`${baseName} (Nouvelle versión)`);
    
    return alternatives;
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      productName: this.productName,
      existingProductId: this.existingProductId,
      suggestedAlternatives: this.suggestedAlternatives,
    };
  }

  public getDuplicateDetails(): string {
    let details = `Producto duplicado: '${this.productName}'`;
    if (this.existingProductId) {
      details += ` (ID existente: ${this.existingProductId})`;
    }
    return details;
  }

  public static isDuplicateProductException(error: unknown): error is DuplicateProductException {
    return error instanceof DuplicateProductException;
  }

  public getErrorContext(): Record<string, unknown> {
    return {
      errorType: 'DuplicateProduct',
      requestedName: this.productName,
      conflictWith: this.existingProductId,
      httpMethod: 'POST',
      endpoint: '/products',
      suggestion: 'Utilice un nombre diferente o verifique el producto existente',
    };
  }
}
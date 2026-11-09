import { CreateProductDTO, UpdateProductDTO, ProductDTO } from '../models/productModel';
import { NegativePriceException } from '../exceptions/negativePriceException';

export class ProductValidator {
    public validateCreateProduct(createProductDTO: CreateProductDTO, existingProducts: ProductDTO[]): void {
        this.validateName(createProductDTO.name);
        this.validatePrice(createProductDTO.price);
        this.validateStock(createProductDTO.stock);
        this.validateCategory(createProductDTO.category);
    }

    public validateUpdateProduct(updateProductDTO: UpdateProductDTO, existingProducts: ProductDTO[]): void {
        if (updateProductDTO.name !== undefined) {
            this.validateName(updateProductDTO.name);
        }
        if (updateProductDTO.price !== undefined) {
            this.validatePrice(updateProductDTO.price);
        }
        if (updateProductDTO.stock !== undefined) {
            this.validateStock(updateProductDTO.stock);
        }
        if (updateProductDTO.category !== undefined) {
            this.validateCategory(updateProductDTO.category);
        }
    }

    private validateName(name: string): void {
        if (!name || name.trim().length === 0) {
            throw new Error('Product name is required');
        }
        if (name.length < 3) {
            throw new Error('Product name must be at least 3 characters long');
        }
        if (name.length > 100) {
            throw new Error('Product name must not exceed 100 characters');
        }
    }

    private validatePrice(price: number): void {
        if (typeof price !== 'number') {
            throw new Error('Product price must be a number');
        }
        if (price < 0) {
            throw new NegativePriceException('Product price cannot be negative');
        }
        if (price > 1000000) {
            throw new Error('Product price exceeds maximum allowed value');
        }
    }

    private validateStock(stock: number): void {
        if (typeof stock !== 'number') {
            throw new Error('Product stock must be a number');
        }
        if (!Number.isInteger(stock)) {
            throw new Error('Product stock must be an integer');
        }
        if (stock < 0) {
            throw new Error('Product stock cannot be negative');
        }
        if (stock > 100000) {
            throw new Error('Product stock exceeds maximum allowed value');
        }
    }

    private validateCategory(category: string): void {
        if (!category || category.trim().length === 0) {
            throw new Error('Product category is required');
        }
        if (category.length > 50) {
            throw new Error('Product category must not exceed 50 characters');
        }
    }
}
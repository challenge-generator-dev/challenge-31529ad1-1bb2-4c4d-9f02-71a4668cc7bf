import { IsInt, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class ProductDTO {
    id: string;

    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name: string;

    @IsNumber({}, { message: 'El precio debe ser un número válido' })
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    price: number;

    @IsInt({ message: 'El stock debe ser un número entero' })
    @IsPositive({ message: 'El stock debe ser un número positivo' })
    stock: number;

    @IsString()
    @MinLength(3, { message: 'La categoría debe tener al menos 3 caracteres' })
    category: string;

    constructor(id: string, name: string, price: number, stock: number, category: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}

export class CreateProductDTO {
    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name: string;

    @IsNumber({}, { message: 'El precio debe ser un número válido' })
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    price: number;

    @IsInt({ message: 'El stock debe ser un número entero' })
    @IsPositive({ message: 'El stock debe ser un número positivo' })
    stock: number;

    @IsString()
    @MinLength(3, { message: 'La categoría debe tener al menos 3 caracteres' })
    category: string;

    constructor(name: string, price: number, stock: number, category: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}

export class UpdateProductDTO {
    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name?: string;

    @IsNumber({}, { message: 'El precio debe ser un número válido' })
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    price?: number;

    @IsInt({ message: 'El stock debe ser un número entero' })
    @IsPositive({ message: 'El stock debe ser un número positivo' })
    stock?: number;

    @IsString()
    @MinLength(3, { message: 'La categoría debe tener al menos 3 caracteres' })
    category?: string;

    constructor(name?: string, price?: number, stock?: number, category?: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}
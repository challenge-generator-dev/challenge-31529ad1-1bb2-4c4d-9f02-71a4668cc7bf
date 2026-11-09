import { IsString, IsNumber, IsPositive, IsOptional, Min, MaxLength, MinLength } from 'class-validator';

export interface ProductEntity {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ProductDTO implements ProductEntity {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(data: ProductEntity) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.stock = data.stock;
    this.category = data.category;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  toJSON(): Record<string, unknown> {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock,
      category: this.category,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export class CreateProductDTO {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @Min(0)
  @Max(999999)
  stock: number;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  category: string;

  constructor(data: Partial<CreateProductDTO>) {
    this.name = data.name || '';
    this.price = data.price || 0;
    this.stock = data.stock || 0;
    this.category = data.category || '';
  }

  static fromRequest(body: unknown): CreateProductDTO {
    return new CreateProductDTO(body as Partial<CreateProductDTO>);
  }
}

export class UpdateProductDTO {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999999)
  stock?: number;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  category?: string;

  constructor(data: Partial<UpdateProductDTO>) {
    this.name = data.name;
    this.price = data.price;
    this.stock = data.stock;
    this.category = data.category;
  }

  static fromRequest(body: unknown): UpdateProductDTO {
    return new UpdateProductDTO(body as Partial<UpdateProductDTO>);
  }

  hasAnyField(): boolean {
    return !!(
      this.name !== undefined ||
      this.price !== undefined ||
      this.stock !== undefined ||
      this.category !== undefined
    );
  }
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'name' | 'price' | 'stock' | 'category';
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
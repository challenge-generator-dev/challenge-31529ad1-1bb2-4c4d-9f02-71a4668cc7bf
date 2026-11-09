import { ProductDTO, CreateProductDTO, UpdateProductDTO } from '../models/productModel';
import { ProductValidator } from '../validators/productValidator';
import { DuplicateProductException } from '../exceptions/duplicateProductException';
import { HttpException } from '../exceptions/httpException';

export class ProductService {
    private products: Map<string, ProductDTO>;
    private productValidator: ProductValidator;

    constructor(productValidator: ProductValidator) {
        this.products = new Map<string, ProductDTO>();
        this.productValidator = productValidator;
        this.initializeSampleData();
    }

    private initializeSampleData(): void {
        const sampleProducts: CreateProductDTO[] = [
            { name: 'Laptop Pro 15', price: 1299.99, stock: 50, category: 'Electronics' },
            { name: 'Wireless Mouse', price: 29.99, stock: 200, category: 'Accessories' },
            { name: 'USB-C Hub', price: 49.99, stock: 150, category: 'Accessories' }
        ];

        sampleProducts.forEach((product, index) => {
            const id = `prod_${index + 1}`;
            const productDTO = new ProductDTO(
                id,
                product.name,
                product.price,
                product.stock,
                product.category
            );
            this.products.set(id, productDTO);
        });
    }

    public async getAllProducts(): Promise<ProductDTO[]> {
        return Array.from(this.products.values());
    }

    public async getProductById(id: string): Promise<ProductDTO | null> {
        const product = this.products.get(id);
        return product || null;
    }

    public async createProduct(createProductDTO: CreateProductDTO): Promise<ProductDTO> {
        this.productValidator.validateCreateProduct(createProductDTO, Array.from(this.products.values()));

        const existingProduct = this.findByName(createProductDTO.name, Array.from(this.products.values()));
        if (existingProduct) {
            throw new DuplicateProductException(`Product with name '${createProductDTO.name}' already exists`);
        }

        const id = `prod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const productDTO = new ProductDTO(
            id,
            createProductDTO.name,
            createProductDTO.price,
            createProductDTO.stock,
            createProductDTO.category
        );

        this.products.set(id, productDTO);
        return productDTO;
    }

    public async updateProduct(id: string, updateProductDTO: UpdateProductDTO): Promise<ProductDTO | null> {
        const existingProduct = this.products.get(id);
        if (!existingProduct) {
            return null;
        }

        if (updateProductDTO.name && updateProductDTO.name !== existingProduct.name) {
            const nameConflict = this.findByName(updateProductDTO.name, Array.from(this.products.values()));
            if (nameConflict && nameConflict.id !== id) {
                throw new DuplicateProductException(`Product with name '${updateProductDTO.name}' already exists`);
            }
        }

        const updatedProduct = new ProductDTO(
            id,
            updateProductDTO.name ?? existingProduct.name,
            updateProductDTO.price ?? existingProduct.price,
            updateProductDTO.stock ?? existingProduct.stock,
            updateProductDTO.category ?? existingProduct.category
        );

        this.products.set(id, updatedProduct);
        return updatedProduct;
    }

    public async deleteProduct(id: string): Promise<boolean> {
        const exists = this.products.has(id);
        if (!exists) {
            throw new HttpException(404, `Product with id '${id}' not found`);
        }
        this.products.delete(id);
        return true;
    }

    private findByName(name: string, products: ProductDTO[]): ProductDTO | undefined {
        return products.find(p => p.name.toLowerCase() === name.toLowerCase());
    }
}
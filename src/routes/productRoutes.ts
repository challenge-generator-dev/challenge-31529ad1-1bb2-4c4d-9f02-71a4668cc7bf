import { Router, Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/productService';
import { CreateProductDTO, UpdateProductDTO } from '../models/productModel';

export class ProductRoutes {
    private router: Router;
    private productService: ProductService;

    constructor(productService: ProductService) {
        this.router = Router();
        this.productService = productService;
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/', this.getAllProducts.bind(this));
        this.router.get('/:id', this.getProductById.bind(this));
        this.router.post('/', this.createProduct.bind(this));
        this.router.put('/:id', this.updateProduct.bind(this));
        this.router.delete('/:id', this.deleteProduct.bind(this));
    }

    public getRouter(): Router {
        return this.router;
    }

    private async getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    private async getProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const product = await this.productService.getProductById(id);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    private async createProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const createProductDTO: CreateProductDTO = req.body as CreateProductDTO;
            const product = await this.productService.createProduct(createProductDTO);
            res.status(201).json(product);
        } catch (error) {
            next(error);
        }
    }

    private async updateProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const updateProductDTO: UpdateProductDTO = req.body as UpdateProductDTO;
            const product = await this.productService.updateProduct(id, updateProductDTO);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    private async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            await this.productService.deleteProduct(id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
import express, { Express, Request, Response } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import { ProductRoutes } from './routes/productRoutes';
import { ProductService } from './services/productService';
import { ProductValidator } from './validators/productValidator';
import { errorMiddleware } from './middlewares/errorMiddleware';

dotenv.config();

class App {
    public express: Express;
    private productService: ProductService;
    private productValidator: ProductValidator;
    private productRoutes: ProductRoutes;

    constructor() {
        this.express = express();
        this.productValidator = new ProductValidator();
        this.productService = new ProductService(this.productValidator);
        this.productRoutes = new ProductRoutes(this.productService);
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    private initializeMiddlewares(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes(): void {
        this.express.use('/products', this.productRoutes.getRouter());
        this.express.get('/health', (req: Request, res: Response) => {
            res.status(200).json({ status: 'OK' });
        });
    }

    private initializeErrorHandling(): void {
        this.express.use(errorMiddleware);
    }
}

const app = new App().express;
export default app;
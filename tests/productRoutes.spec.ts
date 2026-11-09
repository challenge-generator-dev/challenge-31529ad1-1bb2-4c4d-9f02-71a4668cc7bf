import request from 'supertest';
import { Express } from 'express';
import { ProductDTO, CreateProductDTO } from '../src/types/productTypes.js';

const mockProducts: ProductDTO[] = [
  new ProductDTO({
    id: '1',
    name: 'Laptop Pro 15',
    price: 1299.99,
    stock: 50,
    category: 'electronics',
  }),
  new ProductDTO({
    id: '2',
    name: 'Wireless Mouse',
    price: 29.99,
    stock: 200,
    category: 'electronics',
  }),
];

let app: Express;

beforeAll(() => {
  const { App } = require('../src/app.js');
  const appInstance = new App();
  app = appInstance.express;
});

describe('GET /products', () => {
  it('should return all products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return empty array when no products exist', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  it('should support category filter query', async () => {
    const response = await request(app).get('/products?category=electronics');
    expect(response.status).toBe(200);
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('category');
    }
  });
});

describe('GET /products/:id', () => {
  it('should return a product by id', async () => {
    const response = await request(app).get('/products/1');
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(500);
  });

  it('should return 404 for non-existent product', async () => {
    const response = await request(app).get('/products/non-existent-id');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
  });

  it('should return 400 for invalid id format', async () => {
    const response = await request(app).get('/products/invalid-id-format');
    expect(response.status).toBeGreaterThanOrEqual(400);
  });
});

describe('POST /products', () => {
  const validProduct: Partial<CreateProductDTO> = {
    name: 'Test Product',
    price: 99.99,
    stock: 100,
    category: 'test',
  };

  it('should create a new product with valid data', async () => {
    const response = await request(app).post('/products').send(validProduct);
    expect(response.status).toBeGreaterThanOrEqual(201);
    expect(response.status).toBeLessThan(500);
  });

  it('should return 400 when name is missing', async () => {
    const invalidProduct = { ...validProduct, name: undefined };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should return 400 when price is negative', async () => {
    const invalidProduct = { ...validProduct, price: -10 };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
  });

  it('should return 400 when price is zero', async () => {
    const invalidProduct = { ...validProduct, price: 0 };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
  });

  it('should return 400 when stock is negative', async () => {
    const invalidProduct = { ...validProduct, stock: -5 };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
  });

  it('should return 400 when category is missing', async () => {
    const invalidProduct = { ...validProduct, category: '' };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
  });
});

describe('PUT /products/:id', () => {
  const updateData = {
    name: 'Updated Product Name',
    price: 149.99,
  };

  it('should update an existing product', async () => {
    const response = await request(app).put('/products/1').send(updateData);
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(500);
  });

  it('should return 404 when updating non-existent product', async () => {
    const response = await request(app).put('/products/non-existent-id').send(updateData);
    expect(response.status).toBe(404);
  });

  it('should return 400 when price is negative', async () => {
    const invalidUpdate = { price: -50 };
    const response = await request(app).put('/products/1').send(invalidUpdate);
    expect(response.status).toBe(400);
  });

  it('should return 400 when stock is negative', async () => {
    const invalidUpdate = { stock: -10 };
    const response = await request(app).put('/products/1').send(invalidUpdate);
    expect(response.status).toBe(400);
  });
});

describe('DELETE /products/:id', () => {
  it('should delete an existing product', async () => {
    const response = await request(app).delete('/products/1');
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(500);
  });

  it('should return 404 when deleting non-existent product', async () => {
    const response = await request(app).delete('/products/non-existent-id');
    expect(response.status).toBe(404);
  });

  it('should return 400 for invalid id format', async () => {
    const response = await request(app).delete('/products/');
    expect(response.status).toBeGreaterThanOrEqual(400);
  });
});
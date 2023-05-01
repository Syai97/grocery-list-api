import dotenvFlow from 'dotenv-flow';
dotenvFlow.config({ path: './environment' });

import { ProductService } from "../../src/services";
const productService = new ProductService();

describe("Test Jest package", () => {
    it("Testing should pass", async () => {
            await expect(productService.index()).resolves.toBeTruthy();
    });
});

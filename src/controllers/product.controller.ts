import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services";
import Boom from "@hapi/boom";

export class ProductController {
  private productService = new ProductService();

  index = (request: Request, response: Response, errorHandler: NextFunction): void => {
    const query = request.query;

    this.productService
      .index({ query: query })
      .then((products) => {
        // To send response
        response.status(200).json({
          success: true,
          data: products,
        });
      })
      .catch((error: Error) => {
        errorHandler(Boom.badRequest(error.message));
      });
  };

  find = (request: Request, response: Response, errorHandler: NextFunction): void => {
    const params = request.params;

    this.productService
      .find(params.id)
      .then((product) => {
        // To send response
        response.status(200).json({
          success: true,
          data: product,
        });
      })
      .catch((error: Error) => {
        errorHandler(Boom.badRequest(error.message));
      });
  };

  create = (request: Request, response: Response, errorHandler: NextFunction): void => {
    const body = request.body;

    this.productService
      .create(body)
      .then((product) => {
        // To send response
        response.status(200).json({
          success: true,
          data: product,
        });
      })
      .catch((error: Error) => {
        errorHandler(Boom.badRequest(error.message));
      });
  };

  update = (request: Request, response: Response, errorHandler: NextFunction): void => {
    const body = request.body;
    const params = request.params;

    this.productService
      .update({ data: body, id: params.id })
      .then((product) => {
        // To send response
        response.status(200).json({
          success: true,
          data: product,
        });
      })
      .catch((error: Error) => {
        errorHandler(Boom.badRequest(error.message));
      });
  };

  delete = (request: Request, response: Response, errorHandler: NextFunction): void => {
    const params = request.params;

    this.productService
      .delete(params.id)
      .then((product) => {
        // To send response
        response.status(200).json({
          success: true,
          data: product,
        });
      })
      .catch((error: Error) => {
        errorHandler(Boom.badRequest(error.message));
      });
  };
}

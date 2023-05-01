import { Product } from "../models";
import { WhereAttributeHash } from "sequelize/types";

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
export class ProductService {
  index = ({ query }: { where?: WhereAttributeHash; query?: any }): Promise<any> => {
    if (query.limit && query.offset && query.sort) {
      if (query.search)
        return Product.findAndCountAll({
          where: {
            [Op.or]: [
              {
                brand: {
                  [Op.iLike]: `%${query.search}%`,
                },
              },
              {
                name: {
                  [Op.iLike]: `%${query.search}%`,
                },
              },
            ],
          },
          limit: query.limit,
          offset: query.offset,
          order: [["name", query.sort]],
        });

      return Product.findAndCountAll({
        limit: query.limit,
        offset: query.offset,
        order: [["name", query.sort]],
      });
    }

    return Product.findAndCountAll();
  };

  find = (id: string): Promise<any> => {
    return Product.findByPk(id);
  };

  create = (data: any): Promise<any> => {
    return Product.create(data);
  };

  update = ({ data, id }: { data: any; id: string }): Promise<any> => {
    Product.update({ ...data }, { where: { id } });
    return Product.findByPk(id);
  };

  delete = (id: string): Promise<any> => {
    const deletedProduct = Product.findByPk(id);
    Product.destroy({ where: { id } });
    return deletedProduct;
  };
}

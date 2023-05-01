import { Product } from "../models";
import { WhereAttributeHash } from "sequelize/types";

export class ProductService {
  index = ({ where, query }: { where?: WhereAttributeHash; query?: any }): Promise<any> => {
    if (query.limit && query.offset)
      return Product.findAndCountAll({ where, limit: query.limit, offset: query.offset });

    return Product.findAndCountAll({ where });
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

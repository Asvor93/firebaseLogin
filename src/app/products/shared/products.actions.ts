import {Product} from './product';

export class GetAllProducts {
  static readonly type = '[Product] GetAllProductsAction';
}

export class UpdateProduct {
  static readonly type = '[Product] UpdateProductAction';

  constructor(public product: Product) {
  }
}

export class AddProduct {
  static readonly type = '[Product] AddProductAction';

  constructor(public product: Product) {
  }
}

export class DeleteProduct {
  static readonly type = '[Product] DeleteProduct';

  constructor(public product: Product) {
  }
}

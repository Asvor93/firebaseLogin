import {Product} from './product';

export class GetAllProductsAction {
  static readonly type = '[Product] GetAllProductsAction';
}

export class UpdateProductAction {
  static readonly type = '[Product] UpdateProductAction';

  constructor(public payload: Product) {
  }
}

export class AddProductAction {
  static readonly type = '[Product] AddProductAction';

  constructor(public payload: Product) {
  }
}

import {Product} from './product';
import {Injectable} from '@angular/core';
import {ProductsService} from './products.service';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddProduct, DeleteProduct, GetAllProducts, UpdateProduct} from './products.actions';
import {tap} from 'rxjs/operators';

export class ProductStateModel {
  products: Product[];
}

@State<ProductStateModel>({
  name: 'product',
  defaults: {
  products: undefined
  }
})
@Injectable()
export class ProductsState {
  constructor(private productService: ProductsService) {
  }

  @Selector()
  static product(state: ProductStateModel) {
    return state.products;
  }

  @Action(GetAllProducts)
  getAllProducts({getState, setState}: StateContext<ProductStateModel>) {
    return this.productService.getProducts().pipe(
      tap((result) => {
        const state = getState();
        setState({
          ...state,
          products: result,
        });
      })
    );
  }

  @Action(AddProduct)
  addProduct({getState, setState}: StateContext<ProductStateModel>, action: AddProduct) {
    return this.productService.addProduct(action.product);
    const state = getState();
    setState({
          ...state
        });
  }

  @Action(DeleteProduct)
  deleteProduct({getState, setState, dispatch}: StateContext<ProductStateModel>, action: DeleteProduct) {
    const state = getState();
    return this.productService
      .deleteProduct(action.product)
      .pipe(
        tap(product => {
          setState({
            ...state,
          });
          dispatch(new GetAllProducts());
        })
      );
  }

  @Action(UpdateProduct)
  updateProduct({getState, setState}: StateContext<ProductStateModel>, action: UpdateProduct) {
    return this.productService.updateProduct(action.product);
    const state = getState();
    setState({
      ...state
    });
  }
}


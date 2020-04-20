import {Product} from './product';
import {Injectable} from '@angular/core';
import {ProductsService} from './products.service';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddProductAction, GetAllProductsAction} from './products.actions';
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

  @Action(GetAllProductsAction)
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

  @Action(AddProductAction)
  addProduct({getState, patchState}: StateContext<ProductStateModel>, { payload }: AddProductAction) {
        const state = getState();
        patchState({
          products: [...state.products, payload],
        });
      }
}

import { createAction, props } from '@ngrx/store';
import { Product } from '../../../../products/product';

export const loadProductsSuccess = createAction(
    '[Product] Load Success',
    props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
    '[Product] Load Fail',
    props<{ error: string }>()
);

export const createProductSuccess = createAction(
    '[Product] Create Product Success',
    props<{ product: Product }>()
);
export const createProductFailure = createAction(
    '[Product] Create Product Fail',
    props<{ error: string }>()
);

export const updateProductSuccess = createAction(
    '[Product] Update Product Success',
    props<{ product: Product }>()
);
export const updateProductFailure = createAction(
    '[Product] Update Product Fail',
    props<{ error: string }>()
);

export const deleteProductSuccess = createAction(
    '[Product] Delete Product Success',
    props<{ productId: number }>()
);
export const deleteProductFailure = createAction(
    '[Product] Delete Product Fail',
    props<{ error: string }>()
);

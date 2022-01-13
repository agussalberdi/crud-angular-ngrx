import { createAction, props } from '@ngrx/store';
import { Product } from '../../../../products/product';

// Page Actions
export const toggleProductCode = createAction(
    '[Product] Toggle Product Code'
);
export const setCurrentProduct = createAction(
    '[Product] Set Current Product',
    props<{ currentProductId: number }>()
);
export const clearCurrentProduct = createAction(
    '[Product] Clear Current Product'
);
export const initCurrentProduct = createAction(
    '[Product] Init Current Product'
);
export const loadProducts = createAction(
    '[Product] Load'
);
export const createProduct = createAction(
    '[Product] Create Product',
    props<{ product: Product }>()
);
export const updateProduct = createAction(
    '[Product] Update Product',
    props<{ product: Product }>()
);
export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ productId: number }>()
);

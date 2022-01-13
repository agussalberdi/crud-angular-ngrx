import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from '../../../products/product';

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null;
    products: Product[];
    error: string;
}

// initial state
const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
}

// reducer
export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductActions.toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    }),
    on(ProductActions.setCurrentProduct, (state, action): ProductState => {
        return {
            ...state,
            currentProductId: action.currentProductId
        }
    }),
    on(ProductActions.clearCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProductId: null
        }
    }),
    on(ProductActions.initCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProductId: 0
        }
    }),
    on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
        return {
            ...state,
            products: action.products,
            error: ''
        }
    }),
    on(ProductActions.loadProductsFailure, (state, action): ProductState => {
        return {
            ...state,
            products: [],
            error: action.error
        }
    }),
    on(ProductActions.createProductSuccess, (state, action): ProductState => {
        const updatedProducts = [...state.products, action.product];
        return {
            ...state,
            products: updatedProducts,
            currentProductId: null,
            error: ''
        }
    }),
    on(ProductActions.createProductFailure, (state, action): ProductState => {
        return {
            ...state,
            error: action.error
        }
    }),
    on(ProductActions.updateProductSuccess, (state, action): ProductState => {
        const updatedProducts = state.products.map(p => p.id === action.product.id ? action.product : p);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.product.id,
            error: ''
        }
    }),
    on(ProductActions.updateProductFailure, (state, action): ProductState => {
        return {
            ...state,
            error: action.error
        }
    }),
    on(ProductActions.deleteProductSuccess, (state, action): ProductState => {
        const updatedProducts = state.products.filter(p => p.id !== action.productId);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: null,
            error: ''
        }
    }),
    on(ProductActions.deleteProductFailure, (state, action): ProductState => {
        return {
            ...state,
            error: action.error
        }
    }),
);

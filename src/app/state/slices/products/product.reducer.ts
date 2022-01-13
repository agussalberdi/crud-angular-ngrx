import { createReducer, on } from '@ngrx/store';
import { ProductPageActions, ProductApiActions } from './actions/index';
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
    on(ProductPageActions.toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    }),
    on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
        return {
            ...state,
            currentProductId: action.currentProductId
        }
    }),
    on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProductId: null
        }
    }),
    on(ProductPageActions.initCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProductId: 0
        }
    }),
    on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => {
        return {
            ...state,
            products: action.products,
            error: ''
        }
    }),
    on(ProductApiActions.loadProductsFailure, (state, action): ProductState => {
        return {
            ...state,
            products: [],
            error: action.error
        }
    }),
    on(ProductApiActions.createProductSuccess, (state, action): ProductState => {
        const updatedProducts = [...state.products, action.product];
        return {
            ...state,
            products: updatedProducts,
            currentProductId: null,
            error: ''
        }
    }),
    on(ProductApiActions.createProductFailure, (state, action): ProductState => {
        return {
            ...state,
            error: action.error
        }
    }),
    on(ProductApiActions.updateProductSuccess, (state, action): ProductState => {
        const updatedProducts = state.products.map(p => p.id === action.product.id ? action.product : p);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.product.id,
            error: ''
        }
    }),
    on(ProductApiActions.updateProductFailure, (state, action): ProductState => {
        return {
            ...state,
            error: action.error
        }
    }),
    on(ProductApiActions.deleteProductSuccess, (state, action): ProductState => {
        const updatedProducts = state.products.filter(p => p.id !== action.productId);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: null,
            error: ''
        }
    }),
    on(ProductApiActions.deleteProductFailure, (state, action): ProductState => {
        return {
            ...state,
            error: action.error
        }
    }),
);

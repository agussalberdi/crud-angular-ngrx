import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../app.state';
import { ProductState } from './product.reducer';

export interface State extends AppState.State {
    products: ProductState;
}

// selectors
const getProductFeatureSelector = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureSelector,
    state => state.showProductCode
);

export const getCurrentProductId = createSelector(
    getProductFeatureSelector,
    state => state.currentProductId
);

export const getCurrentProduct = createSelector(
    getProductFeatureSelector,
    getCurrentProductId,
    (state, currentProductId) => {
        if (currentProductId === 0) {
            return {
                id: 0,
                productName: '',
                productCode: 'New',
                description: '',
                starRating: 0
            }
        } else {
            return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
        }
    }
);

export const getProducts = createSelector(
    getProductFeatureSelector,
    state => state.products
);

export const getError = createSelector(
    getProductFeatureSelector,
    state => state.error
);

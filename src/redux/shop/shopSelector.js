import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);

export const selectShopCollectionsFotPreview = createSelector([selectShopCollections], collections =>
	Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
	createSelector([selectShopCollections], collections => collections[collectionUrlParam]);

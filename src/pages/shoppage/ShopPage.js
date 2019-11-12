import React from "react";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import { selectShopCollections } from "../../redux/shop/shopSelector";

import CollectionOverview from "./../../components/CollectionOverview/CollectionOverview";
import Collection from "../collection/Collection";

const ShopPage = ({ match }) => {
	console.log(match);
	return (
		<div>
			<Route path={`${match.path}`} component={CollectionOverview} exact />
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</div>
	);
};

// const mapStateToProps = createStructuredSelector({
// 	collections: selectShopCollections
// });

export default ShopPage;

import React from "react";
import { Route } from "react-router-dom";

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

export default ShopPage;

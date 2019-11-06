import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shopSelector";
import CollectionOverview from './../../components/CollectionOverview/CollectionOverview';

const ShopPage = () => {
	return (
		<div>
			<CollectionOverview />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);

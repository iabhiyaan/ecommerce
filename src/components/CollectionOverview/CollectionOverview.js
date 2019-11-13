import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { selectShopCollectionsFotPreview } from "../../redux/shop/shopSelector";
import "./CollectionOverview.scss";

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollectionsFotPreview
});

export default connect(mapStateToProps)(CollectionOverview);

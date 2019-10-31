import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { toggleCartHidden } from "../../redux/cart/cartAction";

import "./CartIcon.scss";
import Carticon from "../../assets/cart-icon.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<img src={Carticon} className="shopping-icon" alt="cart-icon" />
			<span className="item-count"> {itemCount} </span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartAction";

import "./CartIcon.scss";
import Carticon from "../../assets/cart-icon.svg";

const CartIcon = ({ toggleCartHidden }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<img src={Carticon} className="shopping-icon" alt="cart-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import "./CartDropDown.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
			) : (
				<span className="empty-message"> Your Cart is empty </span>
			)}
		</div>
		<Button
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</Button>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

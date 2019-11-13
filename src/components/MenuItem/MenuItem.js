import React from "react";
import "./MenuItem.css";
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
	console.log(match);
	const handleClick = e => {
		history.push(`${linkUrl}`);
	};
	return (
		<div className={`${size} menu-item`} onClick={handleClick}>
			<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="content">
				<div className="title"> {title.toUpperCase()} </div>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);

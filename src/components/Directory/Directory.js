import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directorySelector";
import MenuItem from "../MenuItem/MenuItem";

import "./Directory.css";

const Directory = ({ section }) => {
	return (
		<div className="directory-menu">
			{section.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	section: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

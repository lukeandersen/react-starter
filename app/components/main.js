import React from 'react';

var Main = React.createClass({
	render: function() {
		return (
			<div>
				{/* Header */}
				{this.props.children}
				{/* Footer */}
			</div>
		)
	}
});

module.exports = Main;
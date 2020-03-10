import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../store/actions';

class Users extends Component {
	componentDidMount() {
		this.props.loadUsers();
	}

	render() {
		return (
			<nav className="navbar navbar-dark bg-dark mb-5">
				<div className="container">
					<a className="navbar-brand" href="/">
						Fitcard
					</a>
					<span class="navbar-text">
						{this.props.loading
							? `Loading...`
							: this.props.data.lenght === 1
							? `${this.props.data.length} user registered`
							: `${this.props.data.length} users registered`}
					</span>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	data: state.reduxThunk.data,
	loading: state.reduxThunk.loading,
	error: state.reduxThunk.error
});

const mapDispatchToProps = {
	loadUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

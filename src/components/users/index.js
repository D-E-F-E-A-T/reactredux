import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../store/actions';

class Users extends Component {
	componentDidMount() {
		this.props.loadUsers();
	}

	render() {
		if (this.props.loading) {
			return (
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			);
		}

		if (this.props.error) {
			return (
				<div className="container">
					<div class="alert alert-danger" role="alert">
						{this.props.error}
					</div>
				</div>
			);
		}

		return (
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Username</th>
							<th>Email</th>
							<th>Company</th>
						</tr>
					</thead>
					<tbody>
						{this.props.data.map(user => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>
									<a href={`mailto:${user.email}`}>
										{user.email}
									</a>
								</td>
								<td>{user.company.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
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

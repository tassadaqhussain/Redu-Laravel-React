import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setCampaignType} from '../actions/index'


class ProductList extends Component {

    renderList() {
        return this.props.product.map((prodcut) => {
            return (
                <li
                    key={prodcut.id}
                    onClick={() => this.props.setCampaignType(prodcut)}
                >
                    {prodcut.first} {prodcut.last}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        products: state.products
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({setCampaignType: setCampaignType}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(ProductList);

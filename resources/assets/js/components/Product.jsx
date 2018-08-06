import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setCampaignType} from '../actions/index'
class Product extends Component {
    renderList() {
        return this.props.products.map((product) => {
            return (
                <li
                    key={product.id}
                    onClick={() => this.props.setCampaignType(product)}
                >
                    {product.first} {product.last}
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
    }//..... end of render() .....//
}//..... end of Product.
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
export default connect(mapStateToProps, matchDispatchToProps)(Product);

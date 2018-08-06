import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setCampaignType} from "../actions/index";

class ProductDetail extends Component {
    render() {
        console.log(this.props.product);
        if(!this.props.product){
            return (<div>This is test........</div>);
        }
        return (

            <div>
                <img src={this.props.product.thumbnail} />
                <h2>{this.props.product.first} {this.props.product.last}</h2>
                <h3>Age: {this.props.product.age}</h3>
                <h3>Description: {this.props.product.description}</h3>
            </div>
        );
    }//..... end of render() .....//
}//..... end of ProductDetail.

function mapStateToProps(state) {
    return {
        product: state.activeUser
    };
}

export default connect(mapStateToProps)(ProductDetail);
import React, {Component} from 'react';
import {getDefaultData} from "../actions";

class ShopsList extends Component {
    renderList() {
        return this.props.shops.map((shop) => {
            return (
                <li
                    key={shop.id}
                    onClick={()=>this.props.getDefaultData(shop)}
                 >
                    {shop.name}
                </li>
            )

        });
    }
    render() {
        return (
           <ul>
               {this.renderList()}
           </ul>
        );
    }//..... end of render() .....//
}//..... end of ShopsList.

function mapStateToProps(state) {
    return {
        shops:state.shops
    }
}
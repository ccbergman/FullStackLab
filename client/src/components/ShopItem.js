import React, { Component } from 'react';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class ShopItem extends Component {
    
        render() {
            return (
                <div className="ShopItem">
                    <button className="ShopItem__delete-button"
                            title={"Delete " + this.props.item.name}
                            onClick={this.props.onDelete}>
                        <i className="fa fa-minus-circle"></i>
                    </button>
                    <div className="ShopItem__name">{this.props.item.name}</div>
                    <div className="ShopItem__price">{"$" + this.props.item.price || "No Price"}</div>
                </div>
            );
        }
    }
    
    export default ShopItem;
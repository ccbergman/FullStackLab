import React, { Component } from 'react';

class ShopForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: ""
        };
    }

    render() {
        return (
            <form className="ShopForm" onSubmit={this.handleSubmit.bind(this)}>
                <p>
                    <label>Item: </label>
                    <input value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                </p>
                <p >
                    <label>Price: </label>
                    <input type="number" value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
                </p>
                <p className="ShopForm__button-bar">
                    <button className="addBtn" type="submit">Add</button>
                </p>
            </form>
        );
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handlePriceChange(event) {
        this.setState({
            price: Number(event.target.value)
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            price: this.state.price
        });
        this.setState({
            name: "",
            price: ""
        })
    }
}

export default ShopForm;
import React, { Component } from 'react';
import ShopForm from './ShopForm';
import ShopItem from "./ShopItem";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {

    const shopItems = this.state.items.map((item, index) => (
      <ShopItem key={item.name} item={item} onDelete={() => this.removeItem(index)} />
    ));

    var total= 0;

    this.state.items.map((item) =>
    total+=item.price
  );

    return (
      <div className="App">
        <h1>Shopping List</h1>
        <div className="App_items">
          {shopItems}
          <p className="total">Total: ${total.toFixed(2)}</p>
          <ShopForm onSubmit={this.addItem.bind(this)} />
        </div>
      </div>
    );
  }

  addItem(item) {
    this.setState(prevState => {
      const newItems = prevState.items.slice(0);
      newItems.push(item);
      return { items: newItems };
    });
  }

  removeItem(index) {
    this.setState(prevState => {
      const newItems = prevState.items.slice();
      newItems.splice(index, 1);
      return { items: newItems };
    });
  }
}

export default App;
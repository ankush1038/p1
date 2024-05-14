import React, { useState } from 'react';

// Sample product data in JSON format
const productsData = [
  { title: 'Product1', price: 180 },
  { title: 'Product2', price: 1800 },
  { title: 'Product3', price: 200 }
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ title: string; price: number; quantity: number }[]>(productsData.map(product => ({ ...product, quantity: 1 })));

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity = newQuantity;
      setCartItems(updatedCartItems);
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  // Calculate total cart amount
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min={0}
                  onChange={(e) => handleQuantityChange(index, +e.target.value)}
                />
              </td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <strong>Total Amount:</strong> ${cartTotal}
      </div>
    </div>
  );
};

export default ShoppingCart;

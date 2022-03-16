import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { productSerial: '01', name: 'Oil', amount: '1 Litre', price: 150},
    { productSerial: '02', name: 'Rice', amount: '1 kg', price: 150},
    { productSerial: '03', name: 'Date', amount: '1 kg', price: 500}
  ];
  return (
    <div className="App">
      <h1>Recap: React Core Concepts and Practice</h1>
      {
        products.map(product => <GetProduct productSerial = {product.productSerial} name = {product.name} amount = {product.amount} price = {product.price}></GetProduct>)
      }
    </div>
  );
}

const GetProduct = (props) => {
  return (
    <div className='container'>
      <p><small>Serial Number {props.productSerial}</small></p>
      <h1>Product Name: {props.name}</h1>
      <h3>Amount Of Product: {props.amount}</h3>
      <p>Price: {props.price} TAKA</p>
    </div>
  )
}

export default App;

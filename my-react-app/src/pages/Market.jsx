import { ShoppingCartIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router-dom";

function Market() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [productList, setProductList] = useState([
    { name: "book", price: 2.99, pic: "" },
    { name: "cookies", price: 4.99, pic: "" },
    { name: "gum", price: 1.99, pic: "" },
    { name: "shoes", price: 250.99, pic: "" },
  ]);
  const [cartList, setCartList] = useState([]);

  const isLightTheme = useTheme((x) => x.isLightTheme);
  const setIsLightTheme = useTheme((x) => x.setIsLightTheme);
  const toggleTheme = () => setIsLightTheme(!isLightTheme);

const storedPerson=localStorage.getItem('currentUser');
const person = storedPerson ? JSON.parse(storedPerson): null;


  function productAdd(product) {
    if (product.name == "") {
      return;
    }

    setName("");
    setPrice(0);

    setProductList([...productList, product]);
  }
  function cartadd(product) {
    if (!product) {
      return;
    }
    setCartList([...cartList, product]);
  }
  function getCartTotal() {
    let cartTotal = 0;

    for (let i = 0; i < cartList.length; i++) {
      const product = cartList[i];
      cartTotal += product.price;
      // cartTotal = cartTotal+ Number(products.price);
    }
    return cartTotal.toFixed(2);
  }
  function removeBtn(p) {
    const fil = cartList.filter((remove) => {
      return p.name !== remove.name;
    });
    setCartList(fil);
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img className="logo" src="./logo.jpg" alt="logo" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>

      <button className="ld-btn" onClick={toggleTheme}>
        {isLightTheme ? <SunIcon /> : <MoonIcon />}
      </button>
      <div
        className={
          isLightTheme
            ? "App " + "d-flex justify-content-center"
            : "App-dark " + "d-flex justify-content-center"
        }
      >
        <div>
          <nav role="main">
            <a href="link.com">link</a>
          </nav>
          <h1 className="mh1">Welcome,{person.firstName}</h1>
          <div className="dropDown  justify-content-center">
            <select
              onChange={(event) => {
                console.log(event);
                let dumb = JSON.parse(event.target.value);
                cartadd(dumb);
              }}
              className="products"
            >
              <option value={undefined}>Select Product</option>
              {productList.map((p) => {
                let thisIsDumb = JSON.stringify(p);
                return <option value={thisIsDumb}>{p.name}</option>;
              })}
            </select>
          </div>
          <div className="text-center d-flex flex-column align-items-center">
            <div className="addProducts">
              <input
                value={name}
                className="productName"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                type="text"
                placeholder="Product name"
              />
              <input
                value={price}
                className="price"
                onChange={(event) => {
                  setPrice(event.target.valueAsNumber);
                }}
                type="number"
                placeholder="Product price"
              />
            </div>
            <div className="addContainer align-items-center">
              <button
                className="addBtn"
                onClick={() => {
                  productAdd({ name: name, price: price });
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="product-displays">
            <button className="addToCart">+</button>
            <img className="product-Img" src="./shoes.jpg" alt="" />
          </div>
        </div>
        <div className=" cart">
          <table>
            <thead>
              <tr>
                <th>Shopping</th>
                <th>cart</th>
                <th></th>
              </tr>
              <div className="icon">
                <ShoppingCartIcon />
              </div>
            </thead>
            <tbody>
              {console.log("my cart list", cartList)}

              {cartList.map((p) => {
                console.log(p.name);
                return (
                  <tr>
                    <td>
                      <button
                        className="removeBtn"
                        onClick={() => removeBtn(p)}
                      ></button>
                    </td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                  </tr>
                );
              })}
              <tr>
                <td>Total</td>
                <td>{getCartTotal()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Market;

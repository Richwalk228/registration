import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function Market() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState()
  const [productList, setProductList] = useState([
    { name: "book", price: 2.99 },
    { name: "cookies", price: 4.99 },
    { name: "gum", price: 1.99 },
    { name: "shoes", price: 250.99 },

  ]);
  const [cartList, setCartList] = useState([]);

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
      return
    }
    setCartList([...cartList, product]);
  }
  function getCartTotal() {
    let cartTotal = 0

    for (let i = 0; i < cartList.length; i++) {
      const product = cartList[i];
      cartTotal += (product.price);
      // cartTotal = cartTotal+ Number(products.price);
    }
    return (cartTotal.toFixed(2));
  }
  function removeBtn(p) {
    const fil = cartList.filter((remove) => {
      return (p.name !== remove.name);
    })
    setCartList(fil);
  }
  return (
    <div className="App d-flex justify-content-center">
      <div>
        <nav role="main">
          <a href="link.com">link</a>
        </nav>
        <h1 className='mh1'>Market Place</h1>
        <div className='dropDown  justify-content-center'>
          <select onChange={(event) => {
            console.log(event)
            let dumb = JSON.parse(event.target.value);
            cartadd(dumb)
          }} className="products">
            <option value={undefined}>Select Product</option>
            {productList.map((p) => {
              let thisIsDumb = JSON.stringify(p)
              return (<option value={thisIsDumb}>{p.name}</option>)
            })}
          </select>
        </div>
        <div className="text-center d-flex flex-column align-items-center">
          <div className='addProducts'>
            <input value={name} className="name" onChange={(event) => { setName(event.target.value) }} type="text" placeholder='Product name' />
            <input value={price} className="price" onChange={(event) => { setPrice(event.target.valueAsNumber) }} type="number" placeholder='Product price' />
          </div>
          <div className='addContainer align-items-center'>
            <button className='addBtn' onClick={() => { productAdd({ name: name, price: price }) }}>Add</button>
          </div>
          <div className='advertisementScreen  bg-dark d-flex align-items-center justify-content-center text-light'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Qop1sH70nHI?si=NmCV71jO-oJCoIBU" title="YouTube video player"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='text-warning font-weight-lighter'>advertisement</div>
        </div>
      </div>
      <div className='position-absolute top-0 end-0 cart'>
        <table>
          <thead>
            <tr><th>Shopping</th><th>cart</th><th></th></tr><div className='icon'><ShoppingCartIcon /></div>
          </thead>
          <tbody>
            {console.log("my cart list", cartList)}

            {cartList.map((p) => {
              console.log(p.name)
              return (<tr><td><button className='removeBtn' onClick={() => removeBtn(p)}>X</button></td><td>{p.name}</td><td>{p.price}</td></tr>)
            })}
            <tr><td>Total</td><td>{getCartTotal()}</td></tr>
          </tbody>
        </table>
      </div>
<div>



</div>
 </div>
  );
}
export default Market;

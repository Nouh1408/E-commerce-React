import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Products() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                const res = await axios.get(`https://fakestoreapi.com/products`)
                setProducts(res.data)
            } catch (error) {
                console.log('====================================');
                console.log("error fetching data",error);
                console.log('====================================');
            }
        }
        fetchProducts()
    },[])

    function addProduct(product){
        setCart((prevCart)=>{
            const updatedCart = [...prevCart,product]
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    
        console.log('====================================');
        console.log("added to cart");
        console.log('====================================');
        return updatedCart;
        })
    }
     
  return (
    <div>
      <h1>Products</h1>
      <div className='container'>
        <div className="row">
  {products.map((product) => (
    <div className="col-md-3 mb-4" key={product.id} >
      <div className="card h-100">
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <button className='btn btn-outline-success' onClick={()=>addProduct(product)}>Add To cart</button>
        </div>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  )
}

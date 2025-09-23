import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import ErrorPath from '../eRRORpATH/ErrorPath.jsx';

export default function ItemDescription() {
   const {id}=useParams()
   const navigate = useNavigate()
   const [product, setProduct] = useState(null);
   
    useEffect(() => {
      const fetchproduct= async () =>{
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(res.data)
        } catch (error) {
            Navigate(<ErrorPath/>)
        }
      }
      fetchproduct()
    }, [id])
     if (!product) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <img src={product.image} alt={product.title} className="img-fluid" style={{maxHeight: '400px', objectFit: 'contain'}} />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>Price: EGP {product.price}</h4>
          <p><strong>Category:</strong> {product.category}</p>
          <div className='d-flex gap-3'>
            <button className='btn btn-outline-success'>Add to Cart</button>
            <button className='btn btn-outline-info' onClick={()=>{navigate('/cart')}}>View Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

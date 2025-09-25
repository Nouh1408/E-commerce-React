import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CartContext } from '../CartContext/CartContext.jsx';

export default function ItemDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        navigate('*');
      }
    };
    fetchProduct();
  }, [id, navigate]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product);
    setShowAlert(true);

    
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className="container my-5">
      
      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{product.title}</strong> has been added to your cart!
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}

      <div className="row">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>Price: EGP {product.price}</h4>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-success" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => {
                navigate('/cart');
              }}
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

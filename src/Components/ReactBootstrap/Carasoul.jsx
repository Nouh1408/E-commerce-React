import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carasoul({ products }) {
    const [products, setProducts] = useState([]);
        useEffect(() => {
        const fetchProducts = async () => {
          try {
            const res = await axios.get(`https://fakestoreapi.com/products`);
            setProducts(res.data);
          } catch (error) {
            console.log("====================================");
            console.log("error fetching data", error);
            console.log("====================================");
          }
        };
        fetchProducts();
      }, []);
  return (
    <Carousel>
      {products.map((product, index) => (
        <Carousel.Item key={product.id}>
          <img
            className="d-block w-100"
            src={product.image}
            alt={product.title}
            style={{ height: "400px", objectFit: "contain" }}
          />
          <Carousel.Caption>
            <h5>{product.title}</h5>
            <p>${product.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carasoul;

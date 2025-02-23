import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./iPhones.css";

const Iphone = () => {
  const [iphone, setIphone] = useState([]);

  // Fetch data from the public/db.json file
  useEffect(() => {
    fetch("/db.json") // Use the relative path to db.json from the public folder
      .then((res) => res.json())
      .then((data) => {
        setIphone(data);
      });
  }, []);

  return (
    <div className="iphone">
      <h1>iPhones</h1>
      <p>The best for the brightest.</p>
      <div className="product-container">
        {iphone.map((product, index) => (
          <div
            className={`product-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="card1">
              <h1>{product.product_name}</h1>
              <p>{product.Product_brief_description}</p>
              <p>{product.Price_range}</p>

              <Link to={`/iphone/${product.product_id}`}>
                Learn more <i className="fa-solid fa-greater-than"></i>
              </Link>
            </div>
            <img src={product.product_img} alt={product.product_name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iphone;

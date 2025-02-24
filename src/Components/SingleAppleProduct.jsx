import { useState, useEffect } from "react";
import { useParams } from "react-router"; // Make sure to import from 'react-router-dom' for browser compatibility

const SingleAppleProduct = () => {
  const [product, setProduct] = useState(null); // Renamed 'products' to 'product' for clarity
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  const { product_id } = useParams(); // Extract product_id from URL parameters

  useEffect(() => {
    const id = parseInt(product_id);

    // Fetch data from local db.json
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((product) => product.product_id === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      })
      .catch((error) => {
        setError("Error: Unable to fetch product data", error);
      })
      .finally(() => {
        setLoading(false); // Stop loading once the fetch is done
      });
  }, [product_id]); // Re-run the effect when product_id changes

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display error message if any
  }

  if (!product) {
    return <div>No product data available.</div>; // If no product is found
  }

  return (
    <div className="iphone">
      <div>
        <h1>{product.product_name}</h1>
        <p>{product.product_brief_description}</p>
      </div>
      <div>
        <img src={product.product_img} alt={product.product_name} />
      </div>
    </div>
  );
};

export default SingleAppleProduct;

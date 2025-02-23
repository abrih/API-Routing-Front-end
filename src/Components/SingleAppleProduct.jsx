import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import Fouro4 from "../Components/Head/Header Tabs/Fouro4";

const SingleAppleProduct = () => {
  const [products, setproduct] = useState([]);
  // console.log(useParams());

  const { product_id } = useParams();
  console.log(product_id);

  useEffect(() => {
    fetch("http://localhost:2344/api/product_details/")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);

        const singleproduct = data.filter(
          (product) => product.product_id == product_id
        );
        console.log(singleproduct);
      });
  }, []);
  // console.log(products);

  // useEffect(() => {
  //   fetch("http://localhost:2344/api/product_details")
  //     .then((res) => res.json()) // Fetch data properly
  //     .then((products) => {
  //       console.log(products); // Log the data to see the structure
  //       const productList = products;
  //       console.log(products);

  //       console.log(data.products);
  //       // Ensure that you're comparing the correct data types
  //        // Store the result
  //     })
  //     .catch(() => console.log("Error: unable to fetch!"));
  // }, [id]);

  // if (products.length) {
  return (
    <div className="iphone">
      <h1>iPhones</h1>
      <p>The best for the brightest.</p>
      <div>
        {products.map((product) => {
          console.log(product.product_id);
          <div key={product.product_id}>
            <div>
              <h1>{product.product_name}</h1>
              <p>{product.product_brief_description}</p>
              {/* <p>{product.Price_range}</p> */}

              {/* <Link to={`/product/${product.product_url}`}> link yeminaderegew iphone.jsx component laye new
                  Learn more <i className="fa-solid fa-greater-than"></i>
                </Link> */}
            </div>

            <img src={product.product_img} alt={product.product_name} />
          </div>;
        })}
      </div>
    </div>
  );
  // } else {
  //   return <Fouro4 />;
  // }
};

export default SingleAppleProduct;

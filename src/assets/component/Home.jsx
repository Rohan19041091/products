import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Cart from "./Cart";

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter products based on search term and price filter
  const filteredProducts = data.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filterPrice || product.price <= parseInt(filterPrice))
    );
  });

  return (
    <div>
      <h2 className="text-3xl font-bold underline ml-7 p-2">Products</h2>

      <input
        type="text"
        placeholder="Search products by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <select onChange={(e) => setFilterPrice(e.target.value)}>
        <option value="">Filter by price</option>
        <option value="10">Less than $10</option>
        <option value="20">Less than $20</option>
        <option value="30">Less than $30</option>
        {/* Add more options as needed */}
      </select>
      <ul>
        {filteredProducts.map((product, index) => (
          <Card
            key={index}
            name={product.title}
            description={product.description}
            price={product.price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
            stock={product.stock}
            brand={product.brand}
            category={product.category}
          />
        ))}
      </ul>
      <Cart/>
    </div>
  );
}

export default Home;

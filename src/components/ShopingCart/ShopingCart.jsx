import React, { useState } from "react";
import Packed from "./components/Packed/Packed";
import Unpacked from "./components/Unpacked/Unpacked";
import styles from "./ShopingCart.module.css";

export default function ShopingCart() {
  const [formData, setFormData] = useState({ prodcut: "", price: 0 });
  const [products, setProducts] = useState([
    { name: "Pants", price: 10, packed: false },
    { name: "TShirt", price: 5, packed: false },
    { name: "Pants2", price: 10, packed: false },
    { name: "Pants3", price: 8, packed: false },
    { name: "Pants4", price: 10, packed: false },
    { name: "TShirt", price: 5, packed: false },
    { name: "Pants5", price: 10, packed: false },
    { name: "Pants6", price: 8, packed: false },
    { name: "Pants7", price: 10, packed: false },
    { name: "Pants8", price: 8, packed: false },
  ]);

  const deleteItem = (index) => {
    const newItems = [...products];
    newItems.splice(index, 1);
    setProducts(newItems);
    console.log(newItems);
  };

  const markAllUnpacked = () => {
    const newItems = [...products];
    newItems.forEach((item) => {
      item.packed = false;
    });
    setProducts(newItems);
  };
  

  const submit = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      { name: formData.prodcut, price: formData.price, packed: false },
    ]);
    setFormData({ ...formData, prodcut: "", price: 0 });
  };

  const togglePacked = (index) => {
    const newItems = [...products];
    products[index].packed = !products[index].packed;
    setProducts(newItems);
  };

  return (
    <section className={styles.shopingCart}>
      <div className={styles.container}>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Product"
            onChange={(e) => {
              setFormData({ ...formData, prodcut: e.target.value });
            }}
          />
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => {
              setFormData({ ...formData, price: e.target.value });
            }}
          />
          <button>Add</button>
        </form>
        <Unpacked
          products={products}
          togglePacked={togglePacked}
          deleteItem={deleteItem}
        />
        <Packed
          products={products}
          togglePacked={togglePacked}
          deleteItem={deleteItem}
          markAllUnpacked={markAllUnpacked}
        />
      </div>
    </section>
  );
}

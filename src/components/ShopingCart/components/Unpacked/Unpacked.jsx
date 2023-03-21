import React, { useState } from "react";
import styles from "./Unpacked.module.css";
import deleteIcon from "../../../../assets/icons/remove.png";

export default function Unpacked({ products, togglePacked, deleteItem }) {
  const [search, setSearch] = useState("");
  return (
    <section className={styles.unpacked}>
      <h6>Unpacked Items ({products.filter((item) => !item.packed).length})</h6>
      <input
        type="text"
        placeholder="Filter the unpackedItems"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul className={styles.list}>
        {products.map(
          (item, index) =>
            !item.packed &&
            item.name.toLowerCase().includes(search.toLowerCase()) && (
              <li key={index}>
                <div className={styles.info}>
                  <input
                    type="checkbox"
                    checked={item.packed}
                    onChange={() => {
                      togglePacked(index);
                    }}
                  />
                  <p>{item.name}</p>
                </div>
                <div className={styles.price}>
                  <p>{item.price}</p>
                  <span className={styles.delete}>
                    <img
                      src={deleteIcon}
                      onClick={() => {
                        deleteItem(index);
                      }}
                    />
                  </span>
                </div>
              </li>
            )
        )}
      </ul>
    </section>
  );
}

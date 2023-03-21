import React, { useState } from "react";
import styles from "./Packed.module.css";
import deleteIcon from "../../../../assets/icons/remove.png";

export default function Packed({
  products,
  togglePacked,
  deleteItem,
  markAllUnpacked,
}) {
  const [search, setSearch] = useState("");

  return (
    <section className={styles.packed}>
      <h6>Packed Items ({products.filter((item) => item.packed).length})</h6>
      <input
        type="text"
        placeholder="Filter the packed items"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul className={styles.list}>
        {products.map(
          (item, index) =>
            item.packed &&
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
      {products.filter((item) => item.packed).length > 0 ? (
        <>
          <button
            onClick={() => {
              markAllUnpacked();
            }}
          >
            Mark all is unpacked
          </button>

          <p className={styles.total}>
            Total:{" "}
            {products
              .filter((item) => item.packed == true)
              .reduce((total, item) => total + item.price, 0)}{" "}
          </p>
        </>
      ) : (
        ""
      )}
    </section>
  );
}

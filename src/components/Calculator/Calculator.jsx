import React, { useState } from "react";
import styles from "./Calculator.module.css";

export default function Calculator() {
  const [gender, setGender] = useState();
  const [cm, setCm] = useState();
  const [kg, setKg] = useState();
  const [age, setAge] = useState();

  const [result, setResult] = useState("");

  /* Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years) 
    Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years) */

  const submit = (e) => {
    e.preventDefault();
    if (gender === "male") {
      setResult(88.362 + 13.397 * kg + 4.799 * cm - 5.677 * age);
    }
    if (gender === "female") {
      setResult(447.593 + 9.247 * kg + 3.098 * cm - 4.33 * age);
    }
  };

  return (
    <section className={styles.formContainer}>
      <form className={styles.form} onSubmit={submit}>
        <h3>BMR Calculator</h3>
        <select
          name="gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="">Gender*</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="number"
          name="centimeters"
          placeholder="Centimeters*"
          onChange={(e) => {
            setCm(e.target.value);
          }}
        />
        <input
          type="number"
          name="kilograms"
          placeholder="Kilograms*"
          onChange={(e) => {
            setKg(e.target.value);
          }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age*"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <div className={styles.result}>{result.toFixed(2)}</div>
    </section>
  );
}

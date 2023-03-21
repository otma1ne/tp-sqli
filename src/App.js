import "./App.css";
import data from "./data/data.json";
import Country from "./components/Country/Country";
import Calculator from "./components/Calculator/Calculator";
import ShopingCart from "./components/ShopingCart/ShopingCart";

function App() {
  return (
    <div className="App">
      {/* <h2>World's population</h2>

      {data.map((item, index) => {
        return (
          <Country
            key={index}
            country={item.country}
            population={item.population}
            percentage={(item.population * 100) / data[0].population}
          />
        );
      })} */}

      {/* <Calculator /> */}
      <ShopingCart />
    </div>
  );
}

export default App;

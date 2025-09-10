import Banner from "./components/Banner";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [coins, setCoins] = useState(0);
  const handleFreeCreditBtn = (freeCoins) => {
    // console.log(freeCoins);
    setCoins(coins + freeCoins);
  };
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Header coins={coins}></Header>
        <Banner handleFreeCreditBtn={handleFreeCreditBtn}></Banner>
      </div>
    </div>
  );
}

export default App;

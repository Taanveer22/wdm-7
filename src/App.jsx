import Banner from "./components/Banner";
import Header from "./components/Header";
import { useState } from "react";
import MainContainer from "./components/MainContainer";

function App() {
  const [coins, setCoins] = useState(0);
  const [isActive, setIsActive] = useState({
    available: true,
    status: "active",
  });
  const handleFreeCreditBtn = (freeCoins) => {
    // console.log(freeCoins);
    setCoins(coins + freeCoins);
  };
  const handleActiveBtn = (status) => {
    // console.log(status);
    if (status === "available-btn") {
      setIsActive({
        available: true,
        status: "available-btn-active",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected-btn-active",
      });
    }
  };
  // console.log(isActive);
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Header coins={coins}></Header>
        <Banner handleFreeCreditBtn={handleFreeCreditBtn}></Banner>
        <MainContainer
          isActive={isActive}
          handleActiveBtn={handleActiveBtn}
        ></MainContainer>
      </div>
    </div>
  );
}

export default App;

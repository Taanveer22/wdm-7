import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "active",
  });
  const [coins, setCoins] = useState(0);
  const [chosenPlayers, setChosenPlayers] = useState([]);

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
  const handleFreeCreditBtn = (freeCoins) => {
    // console.log(freeCoins);
    setCoins(coins + freeCoins);
  };

  const handleChoosePlayerBtn = (element) => {
    // console.log(element);
    let isExist = chosenPlayers.find(
      (existElement) => existElement.id === element.id
    );
    // console.log(isExist);
    let hasCoins = coins < element.price;
    // console.log(hasCoins);
    let maxPlayers = chosenPlayers.length >= 6;
    // console.log(maxPlayers);
    if (isExist || hasCoins || maxPlayers) {
      if (hasCoins) {
        toast.error("not enough coins");
      } else if (isExist) {
        toast.warning("player already selected");
      } else if (maxPlayers) {
        toast.info("max player reached");
      }
    } else {
      const newChosenPlayers = [...chosenPlayers, element];
      setChosenPlayers(newChosenPlayers);
      setCoins(coins - element.price);
      toast.success("successfully player added");
    }
  };

  const handleDeletePlayerBtn = (item) => {
    const remainingPlayers = chosenPlayers.filter(
      (player) => player.id !== item.id
    );
    setChosenPlayers(remainingPlayers);
    setCoins(coins + item.price);
    toast.warning("finally player removed");
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Header coins={coins}></Header>
        <Banner handleFreeCreditBtn={handleFreeCreditBtn}></Banner>
        <MainContainer
          handleDeletePlayerBtn={handleDeletePlayerBtn}
          chosenPlayers={chosenPlayers}
          handleChoosePlayerBtn={handleChoosePlayerBtn}
          isActive={isActive}
          handleActiveBtn={handleActiveBtn}
        ></MainContainer>
        <ToastContainer></ToastContainer>
        <NewsLetter></NewsLetter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

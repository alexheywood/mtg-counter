import "./App.css";
import { useState, useEffect, useRef } from "react";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import PlayerCard from "./PlayerCard";

function App() {


  let [numberOfPlayers, setNumberOfPlayers] = useState(1);

  const colourList = ["red", "green", "blue", "yellow"];

  const [isHidden, setIsHidden] = useState(false);

  const inputField = useRef();


  function handleConfirm(numOfPlayers) {
    setIsHidden(true)


  }

  return (
    <>
      {isHidden ? undefined : (

        <div className="submit-centered">
        <div className="text-center">
            <p className="submit-text text-light">How many of you are playing today?</p>
            <div className="d-flex justify-content-center">
            <button className="submit-buttons" onClick={() => {
              if (numberOfPlayers > 0) {
              setNumberOfPlayers(numberOfPlayers - 1)
              }
            }}><IoChevronDownOutline className="incrementButton"/></button>
            <p className="submit-text text-center">{numberOfPlayers}</p>
              <button className="submit-buttons" onClick={() => {
                if (numberOfPlayers < 4) {
              setNumberOfPlayers(numberOfPlayers + 1)
                }
            }}><IoChevronUpOutline className="incrementButton"/></button>
              </div>
              <div>
              <button className="btn-lg" type="submit" onClick={(e) => {
                handleConfirm()
              }}>Confirm</button>
            </div>

        </div>
    </div>

      )}

      {isHidden ? 
      (
        <div className="squares-container">
                  <PlayerCard colour="red" />
                  <PlayerCard colour="yellow" />
                  <PlayerCard colour = "blue" />
                  <PlayerCard colour="green" />        
          </div>
      ) 
      : 
      undefined}

      </>



      )


      }


export default App;

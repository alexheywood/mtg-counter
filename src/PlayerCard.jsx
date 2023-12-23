import { useState } from "react";

export default function PlayerCard(props) {
  const [playerHealth, setPlayerHealth] = useState(40);
  const [colour, setColour] = useState(props.colour);
  const [commander, setCommander] = useState(0);
  const [poison, setPoison] = useState(0);

  function handleLifeUp() {
    setPlayerHealth(playerHealth + 1);
  }

  function handleLifeDown() {
    setPlayerHealth(playerHealth - 1);
  }

  function handleCommanderUp() {

    if(commander < 20) {
    setCommander(commander + 1)
    }
    else {
        setCommander('X')
    }
  }

  function handleCommanderDown() {

    setCommander(commander - 1)
  }

  function handlePoisonUp() {
    if (poison < 9) {
    setPoison(poison + 1)

    }

    else {
        setPoison('X')
    }
  }
  
  function handlePoisonDown() {
    setPoison(poison - 1)
  }

  return (
    <>
      <div className={"square " + colour + " text-center content-fit player"}>
        <div className="container d-flex h-100 flex-column">
            <div className="row flex-grow-1">
                <div className="col">
                <button className="health-button text-light" onClick={handleCommanderUp}><h1>Commander</h1></button>
                </div>
                <div className="col">
                <button className="health-button text-light" onClick={handleLifeUp}><h1>Health</h1></button>
                </div>
                <div className="col">
                <button className="health-button text-light" onClick={handlePoisonUp}><h1>Poison</h1></button>
                </div>

            </div>
          <div className="row flex-grow-1 m-0 p-0">
            <div className="col">
            <h1 className="text-light health">{commander}</h1>
            </div>
            <div className="col">
              <h1 className="text-light health">{playerHealth}</h1>
            </div>
            <div className="col">
            <h1 className="text-light health">{poison}</h1>
            </div>
          </div>
          <div className="row flex-grow-1">
            <div className="col">
            <button className="health-button" onClick={handleCommanderDown}></button>
            </div>
            <div className="col">
            <button className="health-button" onClick={handleLifeDown}></button>
            </div>
            <div className="col">

            <button className="health-button" onClick={handlePoisonUp}></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

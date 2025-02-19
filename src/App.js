import "./styles.css";
import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [robotList, setRobotList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addNewRobot = () => {
    if (inputValue.trim() === "") {
      alert("Lütfen bir robot ismi girin.");
      return;
    }
    if (robotList.includes(inputValue)) {
      alert("Robot listede bulunmakta!");
      return;
    }
    setRobotList([...robotList, inputValue]);
    setInputValue("");
  };

  const removeRobot = (robot) => {
    setRobotList(robotList.filter((item) => item !== robot));
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="mb-4">
        <input
          className="border-2 border-solid rounded-md border-purple-500 p-2 mr-2"
          type="text"
          placeholder="Generate Robot"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="border-2 border-solid rounded-md p-2 bg-purple-500 text-white"
          onClick={addNewRobot}
        >
          Enter
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Robot Listesi</h1>
      <div className="grid grid-cols-3 gap-4">
        {robotList.map((robot) => (
          <img
            key={robot}
            src={`https://robohash.org/${robot}`}
            alt={robot}
            className="w-32 h-32 cursor-pointer border-2 border-gray-300 rounded-md"
            onClick={() => removeRobot(robot)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

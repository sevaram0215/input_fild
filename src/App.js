import "./App.scss";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import {
  FaArrowRightArrowLeft,
  FaArrowUpFromGroundWater,
} from "react-icons/fa6";

function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const _handleInputChange = (e, filed) => {
    const { value } = e.target;
    filed(value);
  };

  console.log(inputValue1);
  console.log(inputValue2);

  return (
    <div className="App mt-5">
      <div className="input_div m-auto d-flex ">
        <div className="d-block text-center">
          <label>
          
            <FaUser /> Name_1
          </label>
          <input
            type="text"
            placeholder="Enter Input 1"
            value={inputValue1}

            
            onChange={(e) => _handleInputChange(e, setInputValue1)}
          />
        </div>
        <FaArrowRightArrowLeft
          className="arrow"
          style={{ marginTop: "40px" }}
        />
        <div className="text-center">
          <label>
         
            <FaUserCheck /> Name_2
          </label>
          <input
            type="text"
            placeholder="Enter Input 2"
            value={inputValue2}
            onChange={(e) => _handleInputChange(e, setInputValue2)}
          />
        </div>
      </div>
      <div className="button_div d-flex  gap-5">
        <button
          className="buttan_1"
          onClick={() => {
            setInputValue2(inputValue1);
            setInputValue1("");
            if (inputValue1 === "") {
              alert("Please enter name 1");
            }
          }}
        >
          Move to 2
        </button>
        <FaArrowUpFromGroundWater />
        <button
          className="buttan_2"
          onClick={() => {
            setInputValue1(inputValue2);
            setInputValue2("");
            if (inputValue2 === "") {
              alert("Please enter name input 2");
            }
          }}
        >
          Move to 1
        </button>
      </div>
    </div>
  );
}

export default App;

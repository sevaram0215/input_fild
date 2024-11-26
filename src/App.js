import "./App.scss";
import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaUser } from "react-icons/fa";
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


  const _moveBtn1 =()=>{
    setInputValue2(inputValue1)
    setInputValue1("")
    if(inputValue1 === ""){
      alert("Please enter the first value")
    }


  }
  const _moveBtn2=()=>{
    setInputValue1(inputValue2)
    setInputValue2("")
    if (inputValue2 === "") {
      alert("Please enter name input 2");
    }

  }



  console.log(inputValue1);
  console.log(inputValue2);

  return (
    <div className="App mt-5">
      <div  style={{margin:"auto",width:"50%", color:"#078fec"}}>
       <h4> Name data transfer list </h4>
      </div>
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
   
<div>
<FaLongArrowAltRight className="arrow"  style={{color:"red", marginTop:"30px"}} 
             onClick={() => {
              setInputValue2(inputValue1);
              setInputValue1("");
              if (inputValue1 === "") {
                alert("Please enter name 1");
              }
            }}
           />
           <FaLongArrowAltLeft  style={{color:"green"}}
             onClick={() => {
              setInputValue1(inputValue2);
              setInputValue2("");
              if (inputValue2 === "") {
                alert("Please enter name input 2");
              }
            }}
           
           />
</div>
        
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
          onClick={_moveBtn1}
        >
          Move to 2
        </button>
        <FaArrowUpFromGroundWater />
        <button
          className="buttan_2"
          onClick={_moveBtn2}
        >
          Move to 1
        </button>
      </div>
    </div>
  );
}

export default App;

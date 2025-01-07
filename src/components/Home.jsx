import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchparams, setSearchParams] = useSearchParams();
  const pasteId = searchparams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste ={
      title:title,
      content: value,
      _id:pasteId || 
            Date.now().toString(36),
      createdAt:new Date().toISOString(),

    }
    if(pasteId){
      //update
      dispatch(updateToPaste(paste));

    }
    else{
        //create
        dispatch(addToPaste(paste));

    }

    //after creation 
    setValue('');
    setTitle('');
    setSearchParams("");

  }

  return (
    <div>
      <div className="Home">
        <input
          className="homeClass-input1 "
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createPaste} className="homeClass-input2 ">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="text-area"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;

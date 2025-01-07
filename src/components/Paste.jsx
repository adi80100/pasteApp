import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeFromPaste } from "../redux/pasteSlice";
const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const filterdData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
    dispatch(removeFromPaste(pasteId));
  }
  return (
    <div>
      <input
        className="paste-input"
        type="search"
        value={searchTerm}
        placeholder="search here"
        onChange={(e) => searchTerm(e.target.value)}
      />
      <div className="paste-cards">
        {filterdData.length > 0 &&
          filterdData.map((paste) => {
            return (
              
                <div className="paste-cards-title">
                  {paste.title}
                  <div>
                    {paste.content}
                  </div>

                  <div className="paste-cards-button">
                  <button >
                    Edit
                  </button>
                  <button >
                    View
                  </button>
                  <button onClick={()=>handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button >
                    Copy
                  </button>
                  <button >
                    Share
                  </button>
                  </div>
                  <div>
                    {
                      paste.createdAt
                    }
                  </div>
                </div>
              
            );
          })}
      </div>
    </div>
  );
};

export default Paste;

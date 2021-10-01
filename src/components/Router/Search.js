import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
    const [img,setImg] = useState("");

    const InputEvent = (event) =>{
        const data = event.target.value;
        setImg(data);
    }
  return (
    <>
      <div>
        <input type="text" placeholder="search anything" value = {img} onChange={InputEvent} />
        {img === "" ? null:<SearchResult name={img}/> }
      </div>
    </>
  );
};
export default Search;

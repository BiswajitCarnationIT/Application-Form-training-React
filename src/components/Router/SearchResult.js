import React from "react";

const SearchResult = (props) =>{
    const img = `https://source.unsplash.com/600x500/?${props.name}`;
    return (
        <>
            <div>
                <img src={img} alt="image"/>
            </div>
        </>
    )
}

export default SearchResult;
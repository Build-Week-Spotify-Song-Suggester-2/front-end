import React from 'react';



const SearchCard = props => {

const {artist, title } = props.song;

  return(
    <div >

        <h4>{artist}</h4>
        <br></br>
        <h6>{title}</h6>
        <br></br>
      </div>
  );
};

export default SearchCard;
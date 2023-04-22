import React, { useState, useEffect } from 'react';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import data from './reading';
import { Button } from 'react-bootstrap';

export default function FavoriteToggle() {
  const [toggleFav, setToggleFav] = useState(false)
    console.log(toggleFav);

    const handleClick  = () => {
        setToggleFav(current => !current);
    }
    
  return (
    <>
    <Button>
       <FaHeartBroken style={{ color: toggleFav ? 'red': 'white'}} onClick={handleClick}/>
    </Button>
    </>
  )
}
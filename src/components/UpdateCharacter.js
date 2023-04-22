import React, { useEffect, useState} from 'react';
import axios from 'axios';


export default function UpdateCharacter() {


    const favButton =$("<button/>")
        favButton.text("Favorite")
        if(character.favorite){
            favButton.addClass("btn btn-success")
        }else {
            favButton.addClass("btn btn-outline-success")
        }
        favButton.on("click", () => toggleFavorite(character.Name))
        div.append(favButton)
        characterContainer.append(div)

        const updateAPI = () => {
            axios.put('https://643e65a86c30feced827563c.mockapi.io/characters/${id}', {
                
            })
        }
}
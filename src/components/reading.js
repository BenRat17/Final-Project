import React, {useEffect, useState} from 'react';
import {Table, Button} from 'react-bootstrap';
import axios from 'axios';
import {FaHeart} from 'react-icons/fa';
import FavoriteToggle from './FavoriteToggle';
import "../App.css";
import "../index.css";

export default function Read(){
    const [APIData, setAPIData]= useState([]);
useEffect(()=>{
axios.get(`https://643e65a86c30feced827563c.mockapi.io/characters`)
.then((response)=>{
    setAPIData(response.data);
})
},[])

const setData= (data) =>{
    let{id, characterName, ancestry, characterLevel, profession, specialization, favorite} = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Name', characterName);
    localStorage.setItem('Ancestry', ancestry);
    localStorage.setItem('level', characterLevel);
    localStorage.setItem('profession', profession);
    localStorage.setItem('specialization', specialization);
    localStorage.setItem('favorite', favorite);
}

const onDelete = (id) =>{
    axios.delete(`https://643e65a86c30feced827563c.mockapi.io/characters/${id}`)
    .then(()=>{
        getData();
    })
}

const getData=()=>{
    axios.get(`https://643e65a86c30feced827563c.mockapi.io/characters`)
    .then((getData)=>{
        setAPIData(getData.data);
    })
}

const updateData=()=>{
    axios.put('https://643e65a86c30feced827563c.mockapi.io/characters')
    .then(()=>{
        setAPIData(getData.favorite);
    })
}

return (
    <div>
        <span></span>
         <Table striped bordered hover variant="dark">
             <thead>
                 <tr>
                     <th>Name</th>
                     <th>Ancestry</th>
                     <th>Level</th>
                     <th>Profession</th>
                     <th>Specialization</th>
                     <th>Favorite</th>
                     <th>Delete</th>
                 </tr>
            </thead>
            <tbody>
                {APIData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.characterName}</td>
                            <td>{data.ancestry}</td>
                            <td>{data.characterLevel}</td>
                            <td>{data.profession}</td>
                            <td>{data.specialization}</td>
                            <td>{data.favorite}
                            <FavoriteToggle></FavoriteToggle>
                            </td>
                            <td><Button className='btn btn-danger' onClick={() => onDelete(data.id)}>X</Button></td>
                        </tr>
                    )
                })}
              
             </tbody>
         </Table>
    </div>
    )
};
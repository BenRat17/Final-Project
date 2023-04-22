import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap'

export default function CreateCharacter() {
    const [characterName, setCharacterName] = useState('');
    const [ancestry, setAncestry] = useState('');
    const [characterLevel, setCharacterLevel] = useState(0);
    const [profession, setProfession] = useState('');
    const [specialization, setSpecialization] = useState('');

    const createData = () => {
        axios.post('https://643e65a86c30feced827563c.mockapi.io/characters',
        {
            characterName,
            ancestry,
            characterLevel,
            profession,
            specialization
        })
    }
    return (
        <div>
            <h1 style={{ fontFamily: 'fantasy', fontWeight: 'bold', padding: '1rem', border: 'solid', borderColor: 'gold'}}>Create a New Character</h1>
            <div className='container' style={{ display:'flex', justifyContent: 'center', fontFamily:'fantasy', padding:'1rem'}}>
            <Form>
                <Form.Group className='mb-3' style={{ padding:'1rem'}}>
                <input style={{ margin:'1rem'}} type='text' placeholder='Character Name' onChange={(e) => setCharacterName(e.target.value)}/><br/>
                <input style={{ margin:'1rem'}} type='text' placeholder='Ancestry' onChange={(e) => setAncestry(e.target.value)}/><br/>
                <input style={{ margin:'1rem'}} type='number' placeholder='0' onChange={(e) => setCharacterLevel(e.target.value)}/><br/>
                <input style={{ margin:'1rem'}} type='text' placeholder='Profession' onChange={(e) => setProfession(e.target.value)}/><br/>
                <input style={{ margin:'1rem'}} type='text' placeholder='Specialization' onChange={(e) => setSpecialization(e.target.value)}/><br/>
                <Button style={{ margin:'1rem'}} onClick={createData} type='submit'>Finalize Character</Button>
                </Form.Group>
            </Form>
            </div>
        </div>
    )
}
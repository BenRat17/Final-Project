const CHARACTERS_ENDPOINT = 'https://643e65a86c30feced827563c.mockapi.io/characters';


class CharactersApi  {
    get = async () =>{
        try{
        const resp = await fetch(CHARACTERS_ENDPOINT);
        const data = await resp.json();
        return data;
        }catch (e) {
            console.log('There was an issue retrieving characters.', e);
        }  
    }

    put = async (character)=> {
        try{
            const resp = await fetch(`${CHARACTERS_ENDPOINT}/${character._id}`,{
                method: 'PUT',
                headers: {
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscription)
            });
            return await resp.json();
        }catch(e){
            console.log('There was an issue retrieving characters.', e);
        }
     }
        
     }

     export const charactersApi = new CharactersApi();
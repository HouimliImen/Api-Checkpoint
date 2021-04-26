import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const UserList = () => {
    //listOfUSer
    /*state = {
        persons: {}
    }*/  
    
    const [listOfUSer, setListOfUSer] = useState([])
    const [error, setError] = useState(null); // where to store the coming errors
    useEffect(() => {
        
        function fetchData() {
            axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              const users = res.data;
              setListOfUSer( users );
            }) 
           
            .catch(function (error) {
                // handle error
                console.log("erreur msg : ",error);
              })
         
        }
     
        fetchData();
      });
   

    return (
        <div>
              {listOfUSer.map(el=>
              <div> {el.name}</div>
              )}
        </div>
    )
}

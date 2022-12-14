import {useState, useEffect} from 'react';

export const useGetItem = () => {
    const [data, setData] = useState([]);
    const [shouldRefetch, refetch] = useState(false);
   
    useEffect(() => {
        fetch('http://localhost:8080/getItems', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": "application/json",
            },
        })
            .then(res => res.json())
            .then(response => {
                setData(response);            
            })
            .catch(error => console.log(error));
    }, [refetch]);

    return [data, refetch];
}

export const useUserExists = () => {
    //Check if a user exists in the DB.
    const [response, setResponse] = useState(false);

    const checkForUser = (username) => {
        fetch(`http://localhost:8080/users/exists/${username}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": "application/json",
            },
        })
            .then(res => res.json())
            .then(response => {
                console.log(response.exists);
                if(response.exists == "true") {
                    setResponse(true);
                } else {
                    setResponse(false);
                }
            })
            .catch(error => console.log(error));
    }

    return [response, checkForUser];
}
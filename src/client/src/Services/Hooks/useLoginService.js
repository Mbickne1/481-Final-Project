import { useEffect, useState } from 'react';

export default function useLoginService(username, password) {
    const [isValidUser, setIsValidUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState({username: "", password: ""});

    function validate(username, password) {
        console.log("Username: ", username, " Password: ", password);
        console.log("Making request to check validity of input username and password...");
        fetch(`http://localhost:8080/users/login/${username}/${password}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": "application/json",
            },
        })
            .then(res => res.json())
            .then(response => {
                if(response.status.toLowerCase() == "success") {
                    setIsValidUser(true);
                    setLoggedInUser({
                        username: response.users[0].userName,
                        password: response.users[0].passWord
                    })
                } else {
                    setIsValidUser(false);
                }
            })
            .catch(error => console.log(error));
    }

    function validateGuest() {
        console.log("Logging in as guest...");
        setIsValidUser(true);
    }

    const createUser = (username, password) => {
        fetch(`http://localhost:8080/users/add/${username}/${password}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": "application/json",
            },
        })
            .then(res => res.json())
            .then(response => {
                if(response.status.toLowerCase() == "success") {
                    validate(username, password);
                } else {
                    isValidUser(false);
                }
            })
            .catch(error => console.log(error));
    }

    return [isValidUser, loggedInUser, validate, validateGuest, createUser];
}
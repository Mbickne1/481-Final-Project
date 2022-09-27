import { useEffect, useState } from 'react';

//This is a custom hook
const TEST_USERNAME = "user1";
const TEST_PASSWORD = "password";

export default function useLoginService() {
    const [isValidUser, setIsValidUser] = useState(false);

    function validate(username, password) {
        console.log("Username: ", username, " Password: ", password);
        console.log("Making request to check validity of input username and password...");
        if(username == TEST_USERNAME && TEST_PASSWORD == password) {
            console.log("Valid user. Logging in...");
            setIsValidUser(true);
        } else {
            console.log("Invalid User.");
            setIsValidUser(false);
        }
    }

    function validateGuest() {
        console.log("Logging in as guest...");
        setIsValidUser(true);
    }

    return [isValidUser, validate, validateGuest];
}
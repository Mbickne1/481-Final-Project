import { useEffect, useState } from "react"

export default function useLocalStorage(key, value) {
    const [value, setValue] = useState(() => {
        const val = localStorage.getItem(key);
        const initial = JSON.parse(val);
        return initial || value;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
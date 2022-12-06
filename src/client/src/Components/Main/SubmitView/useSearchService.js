import { useEffect, useState } from "react";

export default function useSearchService(itemName, items) {
    const [item, setItem] = useState({name: "undefined", price: "undefined", qty: "undefined"});
    const [error, setError] = useState(false);

    useEffect(() => {
        const idx = items.findIndex(
            item => item.name.toLowerCase() == itemName.toLowerCase()
        );

        if(idx != -1) {
            setItem(items[idx]);
            
        } else {
            setError(true);
        }
    }, [])

    return [item, error];
}
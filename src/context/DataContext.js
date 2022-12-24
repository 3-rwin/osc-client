import { createContext, useState, useEffect } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [buttons, setButtons] = useState([
        {
            "id": 1,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/start",
            "color": "steelblue"
        },
        {
            "id": 2,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/stop",
            "color": "steelblue"
        },
        {
            "id": 3,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/language 1"
        },
        {
            "id": 4,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/language 2"
        },
        {
            "id": 5,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/language 3"
        },
        {
            "id": 6,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/relais1 1"
        },
        {
            "id": 7,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/relais1 0"
        },
        {
            "id": 8,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/relais2 1"
        },
        {
            "id": 9,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/relais0 1"
        },
        {
            "id": 10,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/difficulty 1",
            "color": "orange"
        },
        {
            "id": 11,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/difficulty 2",
            "color": "orange"
        },
        {
            "id": 12,
            "ip": "127.0.0.1",
            "port": "3333",
            "description": "localhost",
            "message": "/game/difficulty 3",
            "color": "orange"
        }
    ]);
    //const { data, fetchError, isLoading } = useAxiosFetch('http://' + window.location.hostname + ':4001/buttons')
    const [settings, setSettings] = useState(false);

    const fetchError = null;
    const isLoading = null;

    // useEffect(() => {
    //     setButtons(data);
    // },[data])

    return (
        <DataContext.Provider value={{
            fetchError, isLoading,
            buttons, setButtons, settings, setSettings
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
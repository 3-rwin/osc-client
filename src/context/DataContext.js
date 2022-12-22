import { createContext, useState, useEffect } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [buttons, setButtons] = useState([]);
    const { data, fetchError, isLoading } = useAxiosFetch('http://' + window.location.hostname + ':4001/buttons')
    const [settings, setSettings] = useState(false);

    useEffect(() => {
        setButtons(data);
    },[data])

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
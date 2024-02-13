import React, {useState, createContext} from "react";

const DarkModeContext = createContext({});

function DarkModeProvider(props: any) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }

    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                    {props.children}
            </DarkModeContext.Provider>
        </div>

    );
}

export { DarkModeProvider, DarkModeContext };
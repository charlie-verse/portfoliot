"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
        // Check if dark class is already applied by the script
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
        
        // Store the preference if not already stored
        const storedPreference = localStorage.getItem("theme");
        if (!storedPreference) {
            // Default to dark theme for new users
            localStorage.setItem("theme", "dark");
            if (!isDark) {
                document.documentElement.classList.add("dark");
                setIsDarkMode(true);
            }
        }
        
        document.documentElement.style.overflowY = 'auto';
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newValue = !prev;
            localStorage.setItem("theme", newValue ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newValue);
            return newValue;
        });
    };

    if (isDarkMode === null) {
        return null;
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;

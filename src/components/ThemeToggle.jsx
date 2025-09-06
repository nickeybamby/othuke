import React, { useEffect } from 'react'
import Sun from '../assets/cloud-sun.svg'
import Moon from '../assets/moon.svg'

const ThemeToggle = ({theme, setTheme}) => {

    useEffect(() => {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [])
  return (
    <>
        <button>
            {theme === "dark" ? (
                <img src={Sun} alt="Light Mode" className="size-8.5 p-1.5 border border-gray-500 rounded-full" onClick={() => setTheme("light")}/>
            ) : (
                <img src={Moon} alt="Dark Mode" className="size-8.5 p-1.5 border border-gray-500 rounded-full" onClick={() => setTheme("dark")}/>
            )}
        </button>
    </>
  )
}

export default ThemeToggle
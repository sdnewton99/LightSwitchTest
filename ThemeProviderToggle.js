import {useState, useEffect} from 'react';


const ThemeProviderToggle = () => {
    const [theme, setTheme] = useState('darkTheme');
    const toggleTheme = () => {
            if (theme === 'lightTheme'){ 
                window.localStorage.setItem('theme', 'darkTheme');
                setTheme('darkTheme');
            } else if (theme === 'darkTheme') {
                window.localStorage.setItem('theme', 'lightTheme');
                setTheme('lightTheme');
            }
            console.log('[Toggled]');      
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, [])
    return [theme, toggleTheme, theme === 'lightTheme' ? 'inverted' : 'null']
}

export default ThemeProviderToggle;

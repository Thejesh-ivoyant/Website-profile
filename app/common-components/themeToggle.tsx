import { Theme, useTheme } from '~/utils/theme-provider';

export default function ToggleTheme() {
    const [, setTheme] = useTheme();

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
    };

    // return <button className='toggleButton' onClick={toggleTheme}>Toggle</button>;
    // Un-comment this to see the button which toggles the night mode to dark mode on click
    return <></>
}
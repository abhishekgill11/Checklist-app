import logo from "../components/apple-touch-icon.png";

const Header = ({children, theme, setTheme}) => {
    return (
        <header>
            <span className="logo">
                <img src={logo} alt="" />
                <span>{children}</span>
            </span>
            <span className="themeSelector">
                <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
                <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
            </span>
        </header>
    )
}

export default Header;
import Logo from "./Logo/Logo"
import Language from "./Language/Language"
import Search from "./Search/Search"
import css from "./Header.module.css"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className={css.headerContainer}>
            <div className={css.headerWrapper}>
                <div className={css.headerTop}>
                    <Link to={"/"}><Logo /></Link>
                    <Language />
                </div>
                <Search />
            </div>
        </div>
    )
}

export default Header
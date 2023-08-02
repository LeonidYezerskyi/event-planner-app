import { RiArrowDropDownLine } from "react-icons/ri"
import css from "./Language.module.css"
const Language = () => {
    return (
        <div className={css.langSwitcher}>
            <p className={css.langText}>UK</p>
            <RiArrowDropDownLine className={css.langIcon} />
        </div>
    )
}

export default Language
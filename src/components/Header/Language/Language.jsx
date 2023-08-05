import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri"
import cn from 'classnames';
import css from "./Language.module.css"

const Language = () => {
    const [selectedLang, setSelectedLang] = useState('UA');
    const [isOpen, setIsOpen] = useState(false);

    const handleLangClick = (lang) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <>
            <div className={css.langSwitcher} onClick={() => setIsOpen(!isOpen)}>
                <p className={css.langText}>{selectedLang}</p>
                <RiArrowDropDownLine className={css.langIcon} />
            </div>
            {
                isOpen && (
                    <div className={css.langSwitcherOpen}>
                        <p onClick={() => handleLangClick('EN')} className={cn(css.langText, css.langText2, { [css.selectedLang]: selectedLang === 'EN' })}>EN</p>
                        <p onClick={() => handleLangClick('UA')} className={cn(css.langText, css.langText2, { [css.selectedLang]: selectedLang === 'UA' })}>UA</p>
                    </div>
                )
            }
        </>
    );
}

export default Language
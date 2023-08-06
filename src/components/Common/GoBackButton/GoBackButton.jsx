import css from './GoBackButton.module.css'
import { BsArrowLeft } from "react-icons/bs"
import { useLocation, useNavigate } from 'react-router-dom';

const GoBackButton = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (location.state) {
            navigate(location.state.from);
        } else {
            navigate('/');
        }
    }

    return (
        <button className={css.backBtn} onClick={handleGoBack} type='button'>
            <BsArrowLeft className={css.iconBtn} />
            Go back
        </button>
    )
}

export default GoBackButton
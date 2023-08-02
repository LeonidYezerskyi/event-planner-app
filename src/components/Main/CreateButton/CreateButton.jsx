import { AiOutlinePlus } from "react-icons/ai"
import css from './CreateButton.module.css'

const CreateButton = () => {
    return (
        <div className={css.createWrapper}>
            <AiOutlinePlus className={css.icon} />
        </div>
    )
}

export default CreateButton
import GoBackButton from "../../components/Common/GoBackButton/GoBackButton"
import CreateForm from "../../components/CreateForm/CreateForm"
import css from "./CreateEventPage.module.css"

const CreateEventPage = () => {
    return (
        <div className={css.createContainer}>
            <div className={css.createWrapper}>
                <GoBackButton />
                <h2 className={css.title}>Create new event</h2>
                <CreateForm />
            </div>
        </div>
    )
}

export default CreateEventPage
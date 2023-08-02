import CategorySearch from "./CategorySearch/CategorySearch"
import CreateButton from "./CreateButton/CreateButton"
import EventList from "./EventList/EventList"
import SortBy from "./SortBy/SortBy"
import css from "./Main.module.css"

const Main = () => {
    return (
        <div className={css.mainContainer}>
            <div className={css.menuWrapper}>
                <CategorySearch />
                <SortBy />
                <CreateButton />
            </div>
            <EventList />
        </div>
    )
}

export default Main
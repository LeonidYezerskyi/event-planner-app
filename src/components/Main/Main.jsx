import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategorySearch from "./CategorySearch/CategorySearch";
import CreateButton from "./CreateButton/CreateButton";
import EventList from "./EventList/EventList";
import SortBy from "./SortBy/SortBy";
import css from "./Main.module.css";

const Main = () => {
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const updateIsTablet = () => {
            setIsTablet(window.innerWidth >= 768);
        };

        window.addEventListener("resize", updateIsTablet);

        return () => {
            window.removeEventListener("resize", updateIsTablet);
        };
    }, []);

    return (
        <div className={css.mainContainer}>
            <div className={css.menuWrapper}>
                <CategorySearch />
                <SortBy />
                <Link to={"/create"}><CreateButton /></Link>
            </div>
            <div className={css.eventsTitleWrapper}>
                {isTablet ? <p className={css.eventsTitle}>My events</p> : null}
            </div>
            <EventList />
        </div>
    );
};

export default Main;
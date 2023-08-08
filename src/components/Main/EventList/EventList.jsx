import EventCard from '../EventCard/EventCard';
import { events } from "../../../data/data"
import css from "./EventList.module.css"
import { useSelector } from 'react-redux';

const EventList = () => {
    const newEvents = useSelector(state => state.events);
    const combinedEvents = [...events, ...newEvents];

    return (
        <div className={css.listContainer}>
            <ul className={css.listWrapper}>
                {combinedEvents.map(({ title, date, time, place, id, description, category, priority, image }) => {
                    return (
                        <EventCard
                            key={id}
                            title={title}
                            date={date}
                            time={time}
                            place={place}
                            id={id}
                            description={description}
                            category={category}
                            priority={priority}
                            image={image}
                        />
                    );
                })}

            </ul>
        </div>
    )
}

export default EventList
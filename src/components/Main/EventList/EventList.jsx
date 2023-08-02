import EventCard from '../EventCard/EventCard';
import { events } from "../../../data/data"
import css from "./EventList.module.css"

const EventList = () => {
    return (
        <div className={css.wrapper}>
            <ul className={css.listWrapper}>
                {events.map(({ title, date, time, place, id, description, category, priority, image }) => {
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
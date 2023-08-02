import css from './EventCard.module.css'

const EventCard = ({ image, title, date, time, place, id, description, category, priority }) => {
    return (
        <li key={id}>
            <div className={css.cardWrapper}>
                <div className={css.qualityWrapper}>
                    <div className={css.categoryWrapper}>
                        <span className={css.categoryText}>
                            {category}
                        </span>
                    </div>
                    <div className={css.priorityWrapper}>
                        <span className={css.categoryText} >
                            {priority}
                        </span>
                    </div>
                </div>
                <img src={image} alt="#" />
                <div>
                    <span>{date} at {time}</span>
                    <span>{place}</span>
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default EventCard
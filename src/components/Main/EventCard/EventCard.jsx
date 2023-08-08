import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../Common/Button/Button'
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

                <img src={image} alt="#" width="272" className={css.img} />

                <div className={css.datetimeWrapper}>
                    <span className={css.dateInfo}>{date} at {time}</span>
                    <span className={css.dateInfo}>{place}</span>
                </div>

                <div className={css.textWrapper}>
                    <div>
                        <h2 className={css.title}>{title}</h2>
                        <p className={css.text}>{description}</p>
                    </div>
                    <div className={css.btnWrapper}>
                        <Link to={`/info/${id}`}><Button text="More info" /></Link>
                    </div>
                </div>

            </div>
        </li >
    )
}

EventCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
};

export default EventCard
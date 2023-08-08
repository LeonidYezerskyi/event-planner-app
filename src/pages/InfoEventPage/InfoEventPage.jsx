import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { events } from "../../data/data.js"
import Button from '../../components/Common/Button/Button';
import css from "./InfoEventPage.module.css"
import GoBackButton from '../../components/Common/GoBackButton/GoBackButton.jsx';

const InfoEventPage = () => {
    const { id } = useParams();
    const newEvents = useSelector(state => state.events);
    const combinedEvents = [...events, ...newEvents];
    const event = combinedEvents.find(event => event.id === id);

    return (
        <div className={css.infoContainer}>
            <div className={css.infoWrapper}>
                <GoBackButton />
                <div className={css.mainInfoWrapper}>
                    <h2 className={css.infoTitle}>{event.title}</h2>

                    <div className={css.cardWrapper}>
                        <img src={event.image} className={css.img} alt="event picture" />
                        <div className={css.textWrapper}>
                            <p className={css.descrText}>{event.description}</p>
                            <div className={css.infoTextWrapper}>
                                <span className={css.categoryText}>{event.category}</span>
                                <span className={css.categoryText}>{event.priority}</span>
                                <span className={css.categoryText}>{event.place}</span>
                                <span className={css.categoryText}>{event.date} at {event.time}</span>
                            </div>
                            <div className={css.btnWrapper}>
                                <button type='button' onClick={() => { }} className={css.editBtn}>Edit</button>
                                <Button text="Delete event" className={css.delBtn} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoEventPage
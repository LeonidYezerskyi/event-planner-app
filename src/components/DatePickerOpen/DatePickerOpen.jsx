import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import css from './DatePickerOpen.module.css'



const DatePickerOpen = ({ setSelectedDay, setIsDatePickerOpen, selectedDate, handleDateChange }) => {

    const classNames = {
        caption: css.caption,
        caption_label: css.month,
        nav: css.nav,
        nav_button: css.navButton,
        nav_icon: css.navIcon,
        table: css.table,
        head_cell: css.days,
        day: css.calendarDay,
        day_today: css.today,
        day_selected: css.selected,
        button: css.button,
    };

    const handleDateSelect = (date) => {
        setSelectedDay(date);
    };

    return (
        <div className={css.calendarContainer}>
            <DayPicker
                selected={selectedDate}
                mode="single"
                onSelect={handleDateSelect}
                classNames={classNames}
            />
            <div className={css.buttons}>
                <button className={css.cancelButton} onClick={() => setIsDatePickerOpen(false)} type="button">Cancel</button>
                <button className={css.chooseButton} onClick={handleDateChange} type="button">Choose date</button>
            </div>
        </div>
    )
}

export default DatePickerOpen
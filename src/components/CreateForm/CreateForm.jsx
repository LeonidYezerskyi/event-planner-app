import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import cn from "classnames";
import css from "./CreateForm.module.css"
import DatePickerOpen from '../DatePickerOpen/DatePickerOpen';
import { format } from 'date-fns';
import { useRef } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


const CreateForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDay, setSelectedDay] = useState(selectedDate);

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');

    const inputRef = useRef(null);
    const pickerRef = useRef(null);

    const handleInputChange = (e, setter) => {
        const value = e.target.value;
        setter(value);
    };

    const handleClearInput = (setter) => {
        setter('');
    };

    const handleDateChange = () => {
        setSelectedDate(selectedDay);
        setIsDatePickerOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setIsDatePickerOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const formatDate = (date) => format(date, 'dd.MM.yy');

    return (
        <form className={css.formWrapper}>
            <div className={css.inputWrapper}>
                <label htmlFor="title" className={css.label}>Title</label>
                <input
                    className={css.input}
                    placeholder='Input'
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => handleInputChange(e, setTitle)}
                />

                <MdClose
                    className={css.clearIcon}
                    onClick={() => handleClearInput(setTitle)}
                />

            </div>

            <div className={css.inputWrapper}>
                <label className={css.label} htmlFor="description">Description</label>
                <textarea
                    className={cn(css.input, css.inputDescr)}
                    placeholder='Input'
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => handleInputChange(e, setDescription)}
                />

                <MdClose
                    className={css.clearIcon}
                    onClick={() => handleClearInput(setDescription)}
                />

            </div>

            <div className={css.inputWrapper} ref={pickerRef}>
                <label className={css.label} htmlFor="selectedDate">Select date</label>
                <input
                    className={cn(css.input, css.inputDate)}
                    placeholder={isDatePickerOpen ? "Select date" : "Input"}
                    type="text"
                    id="selectedDate"
                    value={selectedDate ? formatDate(selectedDate) : ''}
                    onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                    readOnly
                    ref={inputRef}

                />
                {isDatePickerOpen
                    ? <MdKeyboardArrowUp className={css.iconArrowUp} />
                    : <MdKeyboardArrowDown className={css.iconArrowUp} />
                }
                {isDatePickerOpen && (
                    <DatePickerOpen
                        setSelectedDay={setSelectedDay}
                        setIsDatePickerOpen={setIsDatePickerOpen}
                        selectedDate={selectedDay}
                        handleDateChange={handleDateChange}
                    />
                )}
            </div>

            <div className={css.inputWrapper}>
                <label className={css.label} htmlFor="selectedTime">Select time</label>
                <input
                    className={css.input}
                    type="time"
                    id="selectedTime"
                    value={selectedTime}
                    onChange={(e) => handleInputChange(e, setSelectedTime)}
                />
            </div>

            <div className={css.inputWrapper}>
                <label className={css.label} htmlFor="location">Location</label>
                <input
                    className={css.input}
                    placeholder='Input'
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => handleInputChange(e, setLocation)}
                />

                <MdClose
                    className={css.clearIcon}
                    onClick={() => handleClearInput(setLocation)}
                />

            </div>

            <div className={css.inputWrapper}>
                <label className={css.label} htmlFor="category">Category</label>
                <input
                    className={css.input}
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => handleInputChange(e, setCategory)}
                />
            </div>

            <div className={css.inputWrapper}>
                <label className={cn(css.label, css.labelImg)} htmlFor="category" >Add picture</label>
                <input
                    className={cn(css.input, css.labelImg)}
                    placeholder="Input"
                    disabled
                />
                <MdClose
                    className={cn(css.clearIcon, css.labelImg)}
                    onClick={() => handleClearInput(setLocation)}
                />
            </div>

            <div className={css.inputWrapper}>
                <label className={css.label} htmlFor="priority">Priority</label>
                <select
                    className={css.input}
                    id="priority"
                    value={priority}
                    onChange={(e) => handleInputChange(e, setPriority)}
                >
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>

            <button type="submit">Add event</button>
        </form>
    );
};

export default CreateForm;
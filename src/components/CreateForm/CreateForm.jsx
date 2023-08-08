import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import cn from "classnames";
import css from "./CreateForm.module.css"
import DatePickerOpen from '../DatePickerOpen/DatePickerOpen';
import { format } from 'date-fns';
import { useRef } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Button from '../Common/Button/Button';


const CreateForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDay, setSelectedDay] = useState(selectedDate);
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isPriorityOpen, setIsPriorityOpen] = useState(false);


    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const isMobileOrTablet = windowWidth <= 1279.9;
    const isDesktop = windowWidth >= 1280;

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
            {/* Mobile and Tablet Layout */}
            {isMobileOrTablet && (<><div>
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
                        className={cn(css.input, css.inputDate)}
                        placeholder={isTimePickerOpen ? "Select time" : "Input"}
                        type="text"
                        id="selectedTime"
                        value={selectedTime}
                        onChange={(e) => handleInputChange(e, setSelectedTime)}
                        onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                        readOnly

                    />
                    {isTimePickerOpen
                        ? <MdKeyboardArrowUp className={css.iconArrowUp} />
                        : <MdKeyboardArrowDown className={css.iconArrowUp} />
                    }
                </div>
            </div>

                <div>
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
                            className={cn(css.input, css.inputDate)}
                            placeholder={isCategoryOpen ? "Select category" : "Input"}
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => handleInputChange(e, setCategory)}
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}

                        />
                        {isCategoryOpen
                            ? <MdKeyboardArrowUp className={css.iconArrowUp} />
                            : <MdKeyboardArrowDown className={css.iconArrowUp} />
                        }
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
                        <input
                            className={cn(css.input, css.inputDate)}
                            placeholder={isPriorityOpen ? "Select priority" : "Input"}
                            type="text"
                            id="priority"
                            value={priority}
                            onChange={(e) => handleInputChange(e, setPriority)}
                            onClick={() => setIsPriorityOpen(!isPriorityOpen)}

                        />
                        {isPriorityOpen
                            ? <MdKeyboardArrowUp className={css.iconArrowUp} />
                            : <MdKeyboardArrowDown className={css.iconArrowUp} />
                        }
                    </div>
                </div></>)}

            {/* Desktop Layout */}
            {isDesktop && (<>
                <div className={css.firstColumn}>
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
                </div>
                <div className={css.secondColumn}>
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
                            className={cn(css.input, css.inputDate)}
                            placeholder={isTimePickerOpen ? "Select time" : "Input"}
                            type="text"
                            id="selectedTime"
                            value={selectedTime}
                            onChange={(e) => handleInputChange(e, setSelectedTime)}
                            onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                            readOnly

                        />
                        {isTimePickerOpen
                            ? <MdKeyboardArrowUp className={css.iconArrowUp} />
                            : <MdKeyboardArrowDown className={css.iconArrowUp} />
                        }
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
                </div>
                <div className={css.thirdColumn}>
                    <div className={css.inputWrapper}>
                        <label className={css.label} htmlFor="category">Category</label>
                        <input
                            className={cn(css.input, css.inputDate)}
                            placeholder={isCategoryOpen ? "Select category" : "Input"}
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => handleInputChange(e, setCategory)}
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}

                        />
                        {isCategoryOpen
                            ? <MdKeyboardArrowUp className={css.iconArrowUp} />
                            : <MdKeyboardArrowDown className={css.iconArrowUp} />
                        }
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
                        <input
                            className={cn(css.input, css.inputDate)}
                            placeholder={isPriorityOpen ? "Select priority" : "Input"}
                            type="text"
                            id="priority"
                            value={priority}
                            onChange={(e) => handleInputChange(e, setPriority)}
                            onClick={() => setIsPriorityOpen(!isPriorityOpen)}

                        />
                        {isPriorityOpen
                            ? <MdKeyboardArrowUp className={css.iconArrowUp} />
                            : <MdKeyboardArrowDown className={css.iconArrowUp} />
                        }
                    </div>
                </div></>)}

            <Button text="Add event" className={css.addBtn} />

        </form>
    );
};

export default CreateForm;
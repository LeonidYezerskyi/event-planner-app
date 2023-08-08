import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import cn from "classnames";
import css from "./CreateForm.module.css"
import DatePickerOpen from '../DatePickerOpen/DatePickerOpen';
import { format } from 'date-fns';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Button from '../Common/Button/Button';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from '../../redux/actions';
import defaultImg1 from "../../assets/images/defaultImg.png";
import { nanoid } from 'nanoid'

const CreateForm = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events);

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

    const categoryOptions = ['Art', 'Music', 'Business', 'Conference', 'Workshop', 'Party', 'Sport'];

    const priorityOptions = ['High', 'Medium', 'Low'];

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

    const formatDate = (date) => format(date, 'dd.MM.yy');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            title,
            date: formatDate(selectedDate),
            time: selectedTime,
            place: location,
            description,
            category,
            priority,
            id: nanoid(),
            image: defaultImg1,
        };
        console.log(newEvent);
        dispatch(addEvent(newEvent));

        setTitle('');
        setSelectedDate('');
        setSelectedTime('');
        setLocation('');
        setDescription('');
        setCategory('');
        setPriority('');
    };

    return (
        <form className={css.formWrapper} id="form" onSubmit={handleFormSubmit}>
            {/* Mobile and Tablet Layout */}
            {isMobileOrTablet && (<>
                <div>
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

                    <div className={css.inputWrapper}>
                        <label className={css.label} htmlFor="selectedDate">Select date</label>
                        <input
                            className={cn(css.input, css.inputDate)}
                            placeholder={isDatePickerOpen ? "Select date" : "Input"}
                            type="text"
                            id="selectedDate"
                            value={selectedDate ? formatDate(selectedDate) : ''}
                            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                            readOnly

                        />
                        {isDatePickerOpen
                            ? <MdKeyboardArrowUp onClick={() => {
                                setIsDatePickerOpen(false);
                            }} className={css.iconArrowUp} />
                            : <MdKeyboardArrowDown onClick={() => {
                                setIsDatePickerOpen(true);
                            }} className={css.iconArrowUp} />
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
                            type="time"
                            id="selectedTime"
                            value={selectedTime}
                            onChange={(e) => handleInputChange(e, setSelectedTime)}
                            onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}

                        />
                        {/* {isTimePickerOpen
                            ? <MdKeyboardArrowUp onClick={() => {
                                setIsTimePickerOpen(false);
                            }} className={css.iconArrowUp} />
                            : <MdKeyboardArrowDown onClick={() => {
                                setIsTimePickerOpen(true);
                            }} className={css.iconArrowUp} />
                        } */}
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
                            readOnly

                        />
                        {isCategoryOpen
                            ? (
                                <>
                                    <div className={cn(css.priorityOptions, css.categoryOptions)}>
                                        {categoryOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={css.priorityOption}
                                                onClick={() => {
                                                    setCategory(option);
                                                    setIsCategoryOpen(false);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                    <MdKeyboardArrowUp onClick={() => {
                                        setIsCategoryOpen(false);
                                    }} className={cn(css.iconArrowUp, css.iconArrowUp2)} />
                                </>)
                            : (<MdKeyboardArrowDown onClick={() => {
                                setIsCategoryOpen(true);
                            }} className={css.iconArrowUp} />)
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
                            readOnly
                        />
                        {isPriorityOpen
                            ? (
                                <>
                                    <div className={css.priorityOptions}>
                                        {priorityOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={css.priorityOption}
                                                onClick={() => {
                                                    setPriority(option);
                                                    setIsPriorityOpen(false);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                    <MdKeyboardArrowUp onClick={() => {
                                        setIsPriorityOpen(false);
                                    }} className={cn(css.iconArrowUp, css.iconArrowUp2)} />
                                </>)
                            : (<MdKeyboardArrowDown onClick={() => {
                                setIsPriorityOpen(true);
                            }} className={css.iconArrowUp} />)
                        }
                    </div>


                    <button className={css.addBtn} type='submit'>Add event</button>

                </div>

            </>)}

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
                    <div className={css.inputWrapper}>
                        <label className={css.label} htmlFor="selectedDate">Select date</label>
                        <input
                            className={cn(css.input, css.inputDate)}
                            placeholder={isDatePickerOpen ? "Select date" : "Input"}
                            type="text"
                            id="selectedDate"
                            value={selectedDate ? formatDate(selectedDate) : ''}
                            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                            readOnly

                        />
                        {isDatePickerOpen
                            ? <MdKeyboardArrowUp onClick={() => {
                                setIsDatePickerOpen(false);
                            }} className={css.iconArrowUp} />
                            : <MdKeyboardArrowDown onClick={() => {
                                setIsDatePickerOpen(true);
                            }} className={css.iconArrowUp} />
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
                            ? <MdKeyboardArrowUp onClick={() => {
                                setIsTimePickerOpen(false);
                            }} className={css.iconArrowUp} />
                            : <MdKeyboardArrowDown onClick={() => {
                                setIsTimePickerOpen(true);
                            }} className={css.iconArrowUp} />
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
                            readOnly

                        />
                        {isCategoryOpen
                            ? (
                                <>
                                    <div className={cn(css.priorityOptions, css.categoryOptions)}>
                                        {categoryOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={css.priorityOption}
                                                onClick={() => {
                                                    setCategory(option);
                                                    setIsCategoryOpen(false);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                    <MdKeyboardArrowUp onClick={() => {
                                        setIsCategoryOpen(false);
                                    }} className={cn(css.iconArrowUp, css.iconArrowUp2)} />
                                </>)
                            : (<MdKeyboardArrowDown onClick={() => {
                                setIsCategoryOpen(true);
                            }} className={css.iconArrowUp} />)
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
                            readOnly
                        />
                        {isPriorityOpen
                            ? (
                                <>
                                    <div className={css.priorityOptions}>
                                        {priorityOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={css.priorityOption}
                                                onClick={() => {
                                                    setPriority(option);
                                                    setIsPriorityOpen(false);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                    <MdKeyboardArrowUp onClick={() => {
                                        setIsPriorityOpen(false);
                                    }} className={cn(css.iconArrowUp, css.iconArrowUp2)} />
                                </>)
                            : (<MdKeyboardArrowDown onClick={() => {
                                setIsPriorityOpen(true);
                            }} className={css.iconArrowUp} />)
                        }
                    </div>

                    <Link to={"/"}><button className={css.addBtn} type='submit'>Add event</button></Link>
                </div>
            </>)}
        </form>
    );
};

export default CreateForm;

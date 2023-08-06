import css from './Button.module.css';
import cn from 'classnames';


const Button = ({ text, className }) => {

    return (
        <button className={cn(css.btn, className)} type='button'>{text}</button>
    )
}

export default Button
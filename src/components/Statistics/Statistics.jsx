import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
   return (
    <>
     <ul className={css.stat}>
        <li className={css.text}>Good: {good}</li>
        <li className={css.text}>Neutral: {neutral}</li>
        <li className={css.text}>Bad: {bad}</li>
        <li className={css.text}>Total: {total}</li>
        <li className={css.text}>Positive feedback: {positivePercentage}%</li>
     </ul>
    </>
   )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired,  
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired, 
}
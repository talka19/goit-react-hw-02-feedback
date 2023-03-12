import css from "components/FeedbackOptions/Feedback.module.css"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => {
                return (
                <button type="button" onClick={() => onLeaveFeedback(option)}
                    key={option}
                    className={css.button}>
                    {option}
                </button>
            );
            })}
        </div>
            
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired 
}




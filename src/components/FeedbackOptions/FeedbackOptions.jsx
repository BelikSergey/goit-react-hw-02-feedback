import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ buttonName, onLeaveFeedback }) {
    return (
        <>
            <button
                className={s.button}
                onClick={onLeaveFeedback}
                type="button"
            >
                {buttonName}
            </button>
        </>
    );
}

FeedbackOptions.propTypes = {
    buttonName: PropTypes.string,
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;

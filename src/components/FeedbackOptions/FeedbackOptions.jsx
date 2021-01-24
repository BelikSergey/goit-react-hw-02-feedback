import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ buttonName, onLeaveFeedback }) {
    return (
        <li className={s.item}>
            <button
                className={s.button}
                onClick={onLeaveFeedback}
                type="button"
            >
                {buttonName}
            </button>
        </li>
    );
}
// const MockButtonFeadback = ['Good', 'Neutral', 'Bad'];
// function FeedbackOptions({ onLeaveFeedback }) {
//     return (
//         <ul className={s.buttomList}>
//             <li key="Good" className={s.item}>
//                 <button
//                     className={s.button}
//                     onClick={onLeaveFeedback}
//                     type="button"
//                 >
//                     Good
//                 </button>
//             </li>
//             <li key="Neutral" className={s.item}>
//                 <button
//                     className={s.button}
//                     onClick={onLeaveFeedback}
//                     type="button"
//                 >
//                     Neutral
//                 </button>
//             </li>
//             <li key="Bad" className={s.item}>
//                 <button
//                     className={s.button}
//                     onClick={onLeaveFeedback}
//                     type="button"
//                 >
//                     Bad
//                 </button>
//             </li>
//         </ul>
//     );
// }

FeedbackOptions.propTypes = {
    buttonName: PropTypes.string,
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;

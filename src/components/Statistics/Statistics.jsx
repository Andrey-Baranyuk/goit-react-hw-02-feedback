import PropTypes from 'prop-types';
import styles from 'components/Statistics/Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul className={ styles.list}>
            <li>Good:{ good}</li>
            <li>Neutral:{ neutral}</li>
            <li>Bad:{bad }</li>
            <li>Total:{ total}</li>
            <li>PositivePercentage:{ positivePercentage}%</li>
        </ul>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistics;



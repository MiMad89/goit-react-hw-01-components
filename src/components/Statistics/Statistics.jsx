import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.statList}>
      {stats.map(statistic => {
        return (
          <li
            className={css.item}
            key={statistic.id}
            style={{ backgroundColor: statistic.bg }}
          >
            <span className={css.lable}>{statistic.label}</span>
            <span className={css.percentage}>{statistic.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img className={css.avatar} src={avatar} alt="Avatar" />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.list}>
        <span className={css.lable}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.list}>
        <span className={css.lable}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.list}>
        <span className={css.lable}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

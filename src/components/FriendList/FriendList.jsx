import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => {
      return (
        <li className={css.item} key={id}>
          <span
            className={clsx(css.status, {
              [css.online]: isOnline,
              [css.offline]: !isOnline,
            })}
          ></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import s from './Friends.module.css';

function FriendListItem({ avatar = defaultImage, name, isOnline }) {
  return (
    <div className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
    })
  ),
};

export default FriendListItem;

import PropTypes from 'prop-types';
import Friend from './FriendListItem';
import s from './Friends.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;

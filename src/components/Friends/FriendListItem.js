import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';

function FriendListItem({ avatar = defaultImage, name, isOnline }) {
  return (
    <div class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
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

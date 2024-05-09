import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import css from '../FriendList/FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li className={css.friends} key={friend.id}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
}

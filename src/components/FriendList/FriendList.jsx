import css from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem.jsx";

function FriendList({ friends = [] }) { 
  return (
    <ul className={css.friends}>
      {friends.map((item) => { 
        return (
          <li key={item.id}>
            <FriendListItem name={item.name} avatar={item.avatar} isOnline={item.isOnline} />
          </li>
        );
      }) }
    </ul>
  );
}

export default FriendList;
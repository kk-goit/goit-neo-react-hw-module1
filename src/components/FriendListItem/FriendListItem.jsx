import css from "./FriendListItem.module.css"

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={css[isOnline? "online" : "offline"]}>{isOnline? "Online" : "Offline" }</p>
    </div>
  );
 }

export default FriendListItem;
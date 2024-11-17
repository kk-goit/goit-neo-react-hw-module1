import css from "./Profile.module.css"

function Profile({
  name,
  tag,
  location,
  image,
  stats = { 
    followers: 0,
    views: 0,
    likes: 0,
  }
}) {
  return (
    <div className={css.profile} >
      <div className={css.mainData}>
        <img
          src={image}
          alt="User avatar"
        />
        <p className={css.userName}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>

      <ul className={css.info}>
        {Object.keys(stats).map((key) => {
          return (
            <li key={key} className={css.infoItem}>
              <span className={css.infoHead}>{key}</span>
              <span className={css.infoData}>{stats[key]}</span>
            </li>
          );
        }) }
      </ul>
    </div>
    ); 
  }

export default Profile;

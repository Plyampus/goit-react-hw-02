import css from '../Profile/Profile.module.css';
export default function Profile({ name, tag, image, location, stats }) {
  return (
    <div className={css.container}>
      <div className={css.containerMini}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.stats}>
          <p>Followers</p>
          <p>{stats.followers}</p>
        </li>
        <li className={css.stats}>
          <p>Views</p>
          <p>{stats.views}</p>
        </li>
        <li className={css.stats}>
          <p>Likes</p>
          <p>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
}

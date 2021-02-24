import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/59484932?s=460&u=73fda20fddac62518a70ba71598734432d44dd9f&v=4" alt=""/>
      <div>
        <strong>Marcos Paulo</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}
import logo from '../assets/images/D_logo.png';
import styles from '../styles/D_home.module.css';

const D_home = () => {
  return (
    <div className="container-fluid p-0">
      <div className={styles.homeHeader}>
        <h1 className={styles.homeTitle}>Home Page</h1>
        <img src={logo} alt="Saucy Spoon Logo" className={styles.homeLogo} />
      </div>
    </div>
  );
};

export default D_home;

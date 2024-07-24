import styles from '../page.module.css';
import NavBar from './NavBar';

function Header() {
	return (
		<header className={styles.header}>
			<NavBar />
		</header>
	);
}
export default Header;

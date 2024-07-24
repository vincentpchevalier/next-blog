import Link from 'next/link';

import styles from '../page.module.css';

function NavBar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link>Home</Link>
				</li>
				<li>
					<Link>About</Link>
				</li>
				<li>
					<Link>Posts</Link>
				</li>
			</ul>
		</nav>
	);
}
export default NavBar;

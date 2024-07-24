import Link from 'next/link';

import styles from '../page.module.css';

function NavBar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/blog">Posts</Link>
				</li>
			</ul>
		</nav>
	);
}
export default NavBar;

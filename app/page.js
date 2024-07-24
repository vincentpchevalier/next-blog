import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>My Cool Blog</h1>
			<p>A blog for all my thoughts and ideas</p>
			<Link href="/blog">See Posts</Link>
		</main>
	);
}

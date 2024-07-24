import Link from 'next/link';

import styles from '../page.module.css';

const blogposts = [
	{ id: 1, title: 'Wow this is cool' },
	{ id: 2, title: 'I have no idea what I am doing' },
	{ id: 3, title: 'TGIF am I right?' },
	{ id: 4, title: 'Fell out of a coconut tree' },
	{ id: 5, title: 'NextJS is the Next Big Thing' },
];

function Blog() {
	return (
		<main className={styles.main}>
			<h2>My Posts</h2>
			<ul className={styles.posts}>
				{blogposts.map((post) => (
					<li key={post.id}>
						<Link href={`/blog/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
export default Blog;

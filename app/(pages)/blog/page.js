import Link from 'next/link';

import styles from '../../page.module.css';

import blogposts from '../../data/blogposts';

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

'use client';

// import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import styles from '../../../page.module.css';

import blogposts from '../../../data/blogposts';
import Link from 'next/link';

function Post() {
	const path = usePathname();
	console.log(path);

	const id = path.split('/').pop();
	const post = blogposts.find((post) => post.id === +id);
	if (!post)
		return (
			<main className={styles.error}>
				<p className={styles.errorMsg}>Post not found</p>
			</main>
		);

	return (
		<main className={styles.main}>
			<h2>{post.title}</h2>
			<section className={styles.post}>
				<p>{post.content}</p>
				<Link href="/blog">Go Back</Link>
			</section>
		</main>
	);
}
export default Post;

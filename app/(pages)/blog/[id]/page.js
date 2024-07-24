'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../page.module.css';

import blogposts from '../../../data/blogposts';

function Post() {
	const path = usePathname();
	console.log(path);

	const id = path.split('/').pop();
	const post = blogposts.find((post) => post.id === +id);
	const postIndex = blogposts.findIndex((post) => post.id === +id);

	const prevPostIndex = postIndex > 0 ? postIndex - 1 : blogposts.length - 1;
	const nextPostIndex = postIndex < blogposts.length - 1 ? postIndex + 1 : 0;

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
				<Image src={post.img} alt={post.title} width={630} height={400} />
				<p>{post.content}</p>
			</section>
			<section className={styles.postNav}>
				<Link href={`/blog/${blogposts[prevPostIndex].id}`}>
					← Previous Post
				</Link>
				<Link href="/blog">All Posts</Link>
				<Link href={`/blog/${blogposts[nextPostIndex].id}`}> Next Post →</Link>
			</section>
		</main>
	);
}
export default Post;

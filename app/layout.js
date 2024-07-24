import { Inter } from 'next/font/google';
import './globals.css';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'NextJS Blog',
	description: 'Blog tutorial with NextJS for MAD9022 students',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Container>
					<Header />
					{children}
					<Footer />
				</Container>
			</body>
		</html>
	);
}

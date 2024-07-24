import { Merriweather } from 'next/font/google';
import './globals.css';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
});

export const metadata = {
	title: 'NextJS Blog',
	description: 'Blog tutorial with NextJS for MAD9022 students',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={merriweather.className}>
				<Container>
					<Header />
					{children}
					<Footer />
				</Container>
			</body>
		</html>
	);
}

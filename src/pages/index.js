import * as React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';

export default function Home() {
	return (
		<Layout>
			<div className={styles.home_hero}>
				<h1>Enjoy Static Site Hosting With Kinsta StSH.</h1>
				<p>Fast, Secure, Reliable Hosting Solution.</p>
				<a href="https://kinsta.com/docs/static-site-hosting">
					<div className={styles.btn}>Read more</div>
				</a>
			</div>
		</Layout>
	);
}

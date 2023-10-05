import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/about.module.css';

const about = () => {
	return (
		<Layout>
			<div className={styles.about_cont}>
				<h2>About</h2>
				<div className={styles.about_info}>
					<div className={styles.about_text}>
						<p>
							Kinsta allows you to{' '}
							<a href="https://kinsta.com/docs/static-site-hosting/">
								host up to 100 static websites
							</a>{' '}
							for free. This can be done by pushing your code to your preferred
							Git provider (Bitbucket, GitHub, or GitLab) and then deploying it
							to Kinsta.
						</p>
						<p>
							As an alternative to Static Site Hosting, you can opt for
							deploying your static site with Kinsta’s{' '}
							<a href="https://kinsta.com/application-hosting/">
								Application Hosting
							</a>
							, which provides greater hosting flexibility, a wider range of
							benefits, and access to more robust features. For example,
							scalability, customized deployment using a Dockerfile, and
							comprehensive analytics encompassing real-time and historical
							data.
						</p>
					</div>
					<img src="/kinsta-img.jpg" alt="" className={styles.about_img} />
				</div>
			</div>
		</Layout>
	);
};

export default about;

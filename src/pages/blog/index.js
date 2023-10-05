import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/blog.module.css';

const blog = ({ data }) => {
	const posts = data.allMarkdownRemark.nodes;
	return (
		<Layout>
			<div className={styles.blog_cont}>
				<h2>Blog</h2>
				<div className={styles.blog_grid}>
					{posts.map((post) => (
						<Link
							to={`/blog/${post.frontmatter.slug}`}
							className={styles.blog_card}
							key={post.id}
						>
							<h3>{post.frontmatter.title}</h3>
							<p>{post.frontmatter.description}</p>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default blog;

export const query = graphql`
	query BlogList {
		allMarkdownRemark {
			nodes {
				frontmatter {
					title
					slug
					description
				}
				id
			}
		}
	}
`;

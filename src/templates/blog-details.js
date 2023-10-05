import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/blog-details.module.css';

const BlogDetails = ({ data }) => {
	const { html } = data.markdownRemark;
	const { title, featureImg } = data.markdownRemark.frontmatter;

	return (
		<Layout>
			<div>
				<div className={styles.blog_content}>
					<Img
						fluid={featureImg.childImageSharp.fluid}
						className={styles.blog_featured}
					/>
					<h3>{title}</h3>
					<div
						className={styles.html}
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default BlogDetails;

export const query = graphql`
	query ProjectDetails($slug: String) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				featureImg {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;

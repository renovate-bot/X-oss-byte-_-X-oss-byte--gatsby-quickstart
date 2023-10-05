import { Link } from 'gatsby';
import React from 'react';

const Navbar = () => {
	return (
		<nav>
			<Link to="/">
				<img src="/kinsta-logo.png" alt="" className="logo-img" />
			</Link>
			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/blog">Blog</Link>
			</div>
		</nav>
	);
};

export default Navbar;

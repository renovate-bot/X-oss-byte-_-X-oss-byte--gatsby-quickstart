import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/global.css';

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Navbar />
			<div className="content">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';

import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import { useContext, useState } from 'react';
import { UiContext } from '../../context';
import { NavLink } from './Header';
import { useRouter } from 'next/router';

export const Sidenav = ({ navLink, logo }) => {
	const router = useRouter();
	const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
	const [searchTerm, setSearchTerm] = useState('');
	const navigateTo = (url: string) => {
		toggleSideMenu();
		router.push(url);
	};
	const onSearchTerm = () => {
		if (searchTerm.trim().length === 0) return;
		navigateTo(`/search/${searchTerm}`);
	};
	return (
		<>
			<Drawer
				open={isMenuOpen}
				onClose={toggleSideMenu}
				direction="left"
				size={300}
				className="drawer"
			>
				<div className="logo-navbars" onClick={toggleSideMenu}>
					<NextLink href="/" passHref>
						<img src={logo} alt="" />
					</NextLink>
				</div>

				<form action="" className="search active">
					<input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						onKeyPress={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
						type="text"
						placeholder="Busca aquí..."
					/>
					<label onClick={onSearchTerm}>
						<FontAwesomeIcon className="icon" icon={faSearch} />
					</label>
				</form>

				<div className="nav-links">
					<NavLink navLink={navLink} />
				</div>
			</Drawer>
		</>
	);
};

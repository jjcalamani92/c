import NextLink from "next/link";
import React, { useContext } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faCartShopping,
	faSearch
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { UiContext } from "../../context/ui/UiContext";

export const HeaderSearch = () => {
	return (
		<form action="" className="search">
			<input
				type="search"
				name=""
				placeholder="Busca aquí..."
				id="search-box"
			/>
			<label>
				<FontAwesomeIcon className="icon" icon={faSearch} />
			</label>
		</form>
	);
};

const HeaderIcon = () => {
	const { toggleSideMenu } = useContext(UiContext);

	return (
		<div className="icons-search">
			<HeaderSearch />
			<div className="icons">
				<FontAwesomeIcon
					className="icon bars-icon"
					onClick={toggleSideMenu}
					icon={faBars}
				/>
				<FontAwesomeIcon
					className="icon search-icon"
					onClick={toggleSideMenu}
					icon={faSearch}
				/>
				<Link href="/cart">
					<a className="cart">
						<FontAwesomeIcon
							className="icon shopping-icon"
							icon={faCartShopping}
						/>
						<span>0</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

const HeaderLogo = ({ logo }) => {
	return (
		<div className="logo">
			<NextLink href="/" passHref>
				<img src={`${logo}`} alt="logo" />
			</NextLink>
		</div>
	);
};

export const NavLink = ({ navLink }) => {
	const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
	return (
		<ul>
			{navLink.map((data, i) => (
				<li className="nav-link" key={i}>
					<Link
						// href={`/ropa/${data.url}`}
						href="/[category]"
						as={`/${data.url}`}
						passHref
						prefetch={false}
					>
						<a onClick={isMenuOpen ? toggleSideMenu : ("" as any)}>
							{data.label}
							{data.has_subnav && (
								<FontAwesomeIcon className="icon" icon={faCaretDown} />
							)}
						</a>
					</Link>
					{data.has_subnav ? (
						<div className="dropdown">
							<ul>
								{data.subnav_links.map((dat, i) => (
									<li className="dropdown-link" key={i}>
										<Link
											// href={`/ropa/${data.url}/${dat.url}`}
											href="/[category]/[subcategory]"
											as={`/${data.url.toString()}/${dat.url}`}
											passHref
											prefetch={false}
										>
											<a onClick={isMenuOpen ? toggleSideMenu : ("" as any)}>
												{dat.label}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					) : (
						""
					)}
				</li>
			))}
		</ul>
	);
};

const HeaderNavbar = ({ navLink }) => {
	return (
		<div className="navbar">
			<div className="nav-links">
				<NavLink navLink={navLink} />
			</div>
		</div>
	);
};

export const Header = ({ navLink, logo }) => {
	return (
		<header>
			<HeaderLogo logo={logo} />
			<HeaderNavbar navLink={navLink} />

			<HeaderIcon />
		</header>
	);
};

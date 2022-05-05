import Head from 'next/head';
import { FC } from 'react';
import { Footer, Header } from './';
import data from '../../content/data.json';
import { Sidenav } from './SideNav';

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children: any;
}

export const Layout: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl
}) => {
	const navLink = data.header.nav_links;
	const footer = data.footer;
	// console.log(footer);
	const logo = data.header.logo_img;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="keywords" />
				<meta name="description" content={pageDescription} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:type" content="og:product" />
				{imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
			</Head>
			<Header navLink={navLink} logo={logo} />
			<Sidenav navLink={navLink} logo={logo} />
			<main>{children}</main>
			<Footer data={data} />
		</>
	);
};

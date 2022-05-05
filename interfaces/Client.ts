export interface IClient {
	_id: string;
	name: string;
	email: string;
	password: string;
	img: string;
	rol: string;
	status: boolean;

	siteData: SiteDataClass;

	createdAt: string;
	updatedAt: string;
}

export interface SiteDataClass {
	name: string;
	domain: string;
	dataBase: string;
	logo: string;
	phoneNumber: number;
	map?: string;
	pages: Pages;
	homeSliders: Home[];
	homeBanners: Home[];
}

export interface Home {
	title: string;
	content: string;
	image: string;
}

export interface Pages {
	title: string;
	domain: string;
	path_prefix: string;
	palette: string;
	header: Header;
	footer: Footer;
}

export interface Footer {
	content: string;
	has_social: boolean;
	social_links: SocialLink[];
}

export interface SocialLink {
	label: string;
	url: string;
	style: string;
	icon_class: string;
	new_window: boolean;
}

export interface Header {
	title: string;
	logo_img: string;
	logo_img_alt: string;
	has_nav: boolean;
	nav_links: NavLink[];
}

export interface NavLink {
	label: string;
	url: string;
	style: Style;
	has_subnav: boolean;
	subnav_links?: SubnavLink[];
}

export enum Style {
	Link = 'link'
}

export interface SubnavLink {
	label: string;
	url: string;
	style: Style;
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faChevronRight,
	faPhone,
	faEnvelope,
	faMap
} from '@fortawesome/free-solid-svg-icons';

import { SocialMedia } from './SocialMedia';

const FooterHorario = () => {
	return (
		<div className="box">
			<h3>Horarios de atención</h3>
			<p className="links">
				<FontAwesomeIcon className="icon" icon={faClock} />
				Lunes <span>09:00am - 10:30pm</span>
			</p>
			<p className="links">
				<FontAwesomeIcon className="icon" icon={faClock} />
				Martes <span>09:00am - 10:30pm</span>
			</p>
			<p className="links">
				<FontAwesomeIcon className="icon" icon={faClock} />
				Miercoles <span>09:00am - 10:30pm</span>
			</p>
			<p className="links">
				<FontAwesomeIcon className="icon" icon={faClock} />
				Jueves <span>09:00am - 10:30pm</span>
			</p>
			<p className="links">
				<FontAwesomeIcon className="icon" icon={faClock} />
				Viernes <span>09:00am - 10:30pm</span>
			</p>
			<p className="links">
				<FontAwesomeIcon className="icon" icon={faClock} />
				Sabados <span>09:00am - 10:30pm</span>
			</p>
		</div>
	);
};

export const FooterInfo = () => {
	return (
		<div className="box">
			<h3>Nuevas noticias</h3>
			<p>Suscribete para estar actualizado</p>
			<form action="">
				<input
					type="email"
					name=""
					className="email"
					placeholder="ingresa tu email"
				/>
				<input type="submit" value="suscribirse" className="btn" />
			</form>
		</div>
	);
};

const FooterLink = ({ navLink }) => {
	// console.log(navLink);
	return (
		<div className="box">
			<h3>Links directos</h3>
			{navLink.map((data, i) => (
				<a href={`/${data.label}`} key={i}>
					<FontAwesomeIcon className="icon" icon={faChevronRight} />
					{data.label}
				</a>
			))}
		</div>
	);
};

const FooterContact = ({ domain, phoneNumber }) => {
	return (
		<div className="box">
			<h3>Información de Contacto</h3>
			<a className="links" href="#">
				<FontAwesomeIcon className="icon" icon={faPhone} />
				+591 {phoneNumber}
			</a>
			<a className="links" href="#">
				<FontAwesomeIcon className="icon" icon={faEnvelope} />
				info@{domain}
			</a>
			<a className="links">
				<FontAwesomeIcon className="icon" icon={faMap} />
				La Paz, BOLIVIA
			</a>

			<SocialMedia />
		</div>
	);
};

export const Footer = ({ data }) => {
	const { header, domain, logo, phoneNumber, map } = data;
	// console.log(data);

	return (
		<>
			<section className="footer">
				<FooterLink navLink={header.nav_links} />
				<FooterHorario />
				<FooterContact domain={domain} phoneNumber={phoneNumber} />
				<FooterInfo />
			</section>
		</>
	);
};

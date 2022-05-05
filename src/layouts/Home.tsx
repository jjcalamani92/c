import data from '../../content/data.json';
import { SwiperHome } from '../components';

export const HomeLayout = () => {
	const { homeSliders } = data;
	return (
		<section className="home">
			<SwiperHome homes={homeSliders} />
		</section>
	);
};

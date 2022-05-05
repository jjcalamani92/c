import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
import { FC, useState } from 'react';
import { IProduct } from '../../interfaces/Product';
import { Card } from './Card';
import Image from 'next/image';
interface Props {
	products: IProduct[];
}
interface Props1 {
	homes: any;
}
interface Props2 {
	image: string[];
}

export const SwiperHome: FC<Props1> = ({ homes }) => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				navigation={false}
				pagination={{
					clickable: true
				}}
				modules={[Navigation, Pagination]}
				className="image-display"
			>
				{homes.map((home, i) => (
					<SwiperSlide className="slide" key={i}>
						<div className="content">
							{/* <img src={`${data.imageBanner}`} alt="" /> */}
							<span>{home.content}</span>
							<h3>{home.title}</h3>
							<a href="#" className="btn">
								ver productos
							</a>
						</div>
						<div className="image">
							<img src={`${home.image}`} alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export const SwiperCategory: FC<Props> = ({ products }) => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				loop={true}
				navigation={false}
				// pagination={{
				// 	clickable: true
				// }}
				breakpoints={{
					375: {
						slidesPerView: 1,
						spaceBetween: 10
					},
					765: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 10
					}
				}}
				modules={[Navigation, Pagination]}
				// className="mySwiper"
			>
				{products.map((product, i) => (
					<SwiperSlide key={i}>
						<Card product={product} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export const SwiperMoreProduct: FC<Props> = ({ products }) => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				loop={true}
				navigation={false}
				// pagination={{
				// 	clickable: true
				// }}
				breakpoints={{
					375: {
						slidesPerView: 1,
						spaceBetween: 10
					},
					765: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 10
					}
				}}
				modules={[Navigation, Pagination]}
				// className="image-display"
			>
				{products.map((product, i) => (
					<SwiperSlide key={i}>
						<Card product={product} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export const SwiperDetail: FC<Props2> = ({ image }) => {
	const [activeThumb, setActiveThumb] = useState(null);
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				centeredSlides={true}
				loop={image.length === 1 ? false : true}
				navigation={image.length === 1 ? false : true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				pagination={{
					clickable: image.length === 1 ? false : true
				}}
				grabCursor={image.length === 1 ? false : true}
				thumbs={{ swiper: activeThumb }}
				modules={[Autoplay, Navigation, Pagination, Thumbs]}
				className="image-display"
			>
				{image.map((images, i) => (
					<SwiperSlide className="slide" key={i}>
						<Image
							src={`${images}`}
							width={500}
							height={600}
							objectFit="cover"
							alt=""
						/>
					</SwiperSlide>
				))}
			</Swiper>
			{image.length === 1 ? (
				''
			) : (
				<Swiper
					onSwiper={setActiveThumb}
					slidesPerView={4}
					spaceBetween={10}
					loop={true}
					navigation={false}
					modules={[Navigation, Pagination, Thumbs]}
					className="image-select"
				>
					{image.map((images, i) => (
						<SwiperSlide className="image-select-item" key={i}>
							<img src={`${images}`} alt="" />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</>
	);
};

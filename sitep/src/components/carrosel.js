import styles from "./css/Carrosel.css";
import './css/Responsivo.css';
import image1 from './imgs/frente.jpeg';
import image2 from './imgs/eeep.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carrosel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image2} alt="Descrição da imagem 1" className={styles.slideImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="Descrição da imagem 1" className={styles.slideImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="Descrição da imagem 1" className={styles.slideImage} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carrosel;

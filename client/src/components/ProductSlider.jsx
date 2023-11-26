//import swiper
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import '../slider.css'

//import required modules
import { Pagination, Navigation } from 'swiper'
import { Product } from './';



const ProductSlider = ({data}) => {
  
  return (
    <Swiper
    modules={[Pagination, Navigation]}
    loop={false}
    navigation={true}
    pagination={{
      clickable: true
    }}
    className='productSlider mx-auto max-w-[360px] md:max-w-4xl xl:max-w-[1410px]'
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30 
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  }
    >
      <>
      {
        data?.map((product, i )=> (
          <SwiperSlide key={i}>
            <Product product={product} />
          </SwiperSlide>
        ))
      }
      </>
    </Swiper>

  )
};

export default ProductSlider;

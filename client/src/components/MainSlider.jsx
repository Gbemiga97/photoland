//import swiper
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'



import '../slider.css'

//import required modules
import { Pagination, Autoplay } from 'swiper'
import { images } from '../img'



const sliderData = [
  {
    img: images.cameraImg,
    preTitle: 'Save 20%',
    tittle1: 'on your',
    tittle2: 'first order',
    tittle3: 'first order',
    btnText: 'Show now'
  },
  {
    img: images.cameraImg,
    preTitle: 'Save 20%',
    tittle1: 'on your',
    tittle2: 'first order',
    tittle3: 'first order',
    btnText: 'Show now'
  }, {
    img: images.cameraImg,
    preTitle: 'Save 20%',
    tittle1: 'on your',
    tittle2: 'first order',
    tittle3: 'first order',
    btnText: 'Show now'
  },
]

const MainSlider = () => {
  
  return (
    <Swiper
    modules={[Pagination, Autoplay]}
    loop={false}
    pagination={{
      clickable: true
    }}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false
    }}
    className='mainSlider  h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg
    md:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl'
  
    >
      <>
     {
      sliderData.map(({img, preTitle, tittle1, tittle2, tittle3, btnText}, i) => (
        <SwiperSlide key={i}>
          <div className='flex relative flex-col lg:flex-row h-full p-[20px] md:p-[60px]'>
            {/* text */}
            <div className='w-full lg:flex-1'>
              <p className='uppercase mb-1 text-center lg:text-left'>
                {preTitle}</p>
              <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none
              text-center lg:text-left mb-8 xl:mb-20'>
                <h2>
                  {tittle1} <br />
                  {tittle2} <br />
                  {tittle3}
                </h2>
              </div>
              <button className='btn btn-accent mx-auto lg:mx-0 '>
              {btnText}
              </button>
            </div>

            {/* img */}
            <div className='flex-1'>
              <img 
              className='xl:absolute xl:-right-16 xl:-bottom-12'
              src={img}
               alt={preTitle} />
            </div>
          </div>
        </SwiperSlide>
      ))
     }
      </>
    </Swiper>

  )
};

export default MainSlider;

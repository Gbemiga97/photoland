import { CategoryNav, MainSlider } from '.'
import { images } from '../img';

const Hero = () => {
  return (
    <section className='mb-[1.8rem] xl:mb-[1.8rem] md:-mb-32 pt-36 lg:pt-0'>
      <div className="container mx-auto">
      <div className='flex flex-col gap-y-[1.8rem] xl:flex-row xl:gap-x-[1.8rem]'>
         
         <div>
          <CategoryNav />
         </div>

         <div className='w-full  xl:max-w-[734px] mx-auto'>
          <MainSlider />
         </div>

         <div className='flex flex-col md:flex-row md:gap-x-6 xl:flex-col gap-y-[1.8rem] w-full xl:max-w-lg mx-auto
         h-[500px]'>

          <div className='grad flex h-[250px] rounded-[8px] overflow-hidden w-full relative p-6'>
            <div
            className='flex flex-col max-w-[144px] h-full justify-center'
            >
              <p className='text-[20px] uppercase font-medium leading-tight mb-4'>
                Save 35% dslr cameras</p>
                <a 
                className='uppercase text-accent'
                href="#">
                  Shop now
                </a>
            </div>
            <img 
            className='absolute z-20 -top-2 -right-4'
            src={images.promoimg1} 
            alt="" />
          </div>

          <div className='grad flex h-[250px] rounded-[8px] overflow-hidden relative w-full p-6'>
            <div
            className='flex flex-col max-w-[144px] h-full justify-center'
            >
              <p className='text-[20px] uppercase font-medium leading-tight mb-4'>
                Save 25% mirrorless cameras</p>
                <a 
                className='uppercase text-accent'
                href="#">
                  Shop now
                </a>
            </div>
            <img 
            className='absolute z-20 top-4 -right-6'
            src={images.promoimg2} 
            alt="" />
          </div>


         </div>

      </div>
    </div>
    </section>
  )
};

export default Hero;

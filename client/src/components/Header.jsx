import { SlBag } from 'react-icons/sl'
import { FiMenu } from 'react-icons/fi'
import SearchForm from './SearchForm';
import CategoryNavMobile from './CategoryNavMobile';
import { Link } from 'react-router-dom';
import { images } from '../img';
import Cart from './Cart';
import { useCartContext } from '../context/CartContext';
import { useState } from 'react';




const Header = () => {

  const {itemsAmount} = useCartContext()

  const {isOpen, setIsOpen} = useCartContext()
  const [showCategory, setShowCategory] = useState(false)


  return (
    <header className='bg-primary py-6 fixed w-full top-0 z-40 
    lg:relative xl:mb-[1.8rem]'>
      <div className="container mx-auto">
        <div className='flex gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
          {/* menu */}
          <button
          onClick={() => setShowCategory(true)}
          className='text-3xl xl:hidden cursor-pointer'
          >
            <FiMenu />
          </button>

          {/* category nav mobile */}
          <div
          className={`${showCategory ? 'left-0' : '-left-full'} fixed top-0 bottom-0
          z-30 w-full h-screen transition-all duration-200 xl:hidden`}
          >
            <CategoryNavMobile setShowCategory={setShowCategory} />
          </div>

          {/* logo */}
          <Link
          to={'/'}
          >
          <img src={images.logo} alt="logo" />
          </Link>
          {/* search form show only on desktop */}
          <div className='hidden w-full xl:flex xl:max-w-[734px]'>
            <SearchForm />
          </div>

          {/* phone & cart */}
          <div className='flex items-center gap-x-[10px]'>
            {/* phone */}
            <p className='hidden xl:flex uppercase'>
              Need help? 123 456 789</p>

            {/* cart icon */}
            <button
            onClick={() => setIsOpen(prev => !prev)}
             className='relative cursor-pointer'>
              <SlBag className='text-2xl' />
              <div className='bg-accent text-primary absolute w-[18px] h-[18px]
              rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1rem]'>
                {itemsAmount}</div>
            </button>

            {/* cart  */}
            <div className={`${isOpen ? 'right-0' : '-right-full'}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10
            md:max-w-[500px] transition-all duration-300`}>
              <Cart />
            </div>
          </div>
        </div>

        {/* searchform - show on mobile only */}
        <div className='xl:hidden'>
          <SearchForm />
        </div>
      </div>
    </header>
  )
};

export default Header;

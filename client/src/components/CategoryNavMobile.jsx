import { FiX } from 'react-icons/fi'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';


const CategoryNavMobile = ({setShowCategory}) => {

  const {data} = useFetch('/categories')


  return (
    <div className="w-full h-full bg-primary p-8">
       {/* close icon */}
       <div 
       onClick={() => setShowCategory(false)}
       className='flex  ml-auto w-fit mb-8 cursor-pointer'>
        <FiX className='text-3xl' />
       </div>

       <div className='flex flex-col gap-y-8 justify-center items-center mt-32'>
        {
          data?.map(category => (
            <Link
            to={`/products/${category.id}`}
            key={category.id}
            className='uppercase font-medium text-lg md:text-3xl '
            onClick={() => setShowCategory(false)}
            >
            <span className='text-accent mr-1'>
            {category.attributes.title}</span> Cameras
            </Link>
          ))
        }
       </div>
    </div>
  )
};

export default CategoryNavMobile;

import { FiX } from 'react-icons/fi'

const CategoryNavMobile = ({setShowCategory}) => {
  return (
    <div className="w-full h-full bg-primary p-8">
       {/* close icon */}
       <div 
       onClick={() => setShowCategory(false)}
       className='flex justify-end mb-8 cursor-pointer'>
        <FiX className='text-3xl' />
       </div>
    </div>
  )
};

export default CategoryNavMobile;

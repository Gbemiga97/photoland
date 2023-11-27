import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='pt-16 bg-primary'>
      <div className="container mx-auto">
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>
            Subscribe to our newsletter</h2>
          <p className='text-white/70'>
            Be the first to get the latest news about trends, promotions and much more!</p>
        </div>

        {/* form */}
        <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14' >
          <input 
          placeholder='Your email address'
          type="text" 
          className='input'
          />
          <button className='btn btn-accent min-w-[150px]'>
            Join
          </button>
        </form>
        {/* links */}
        <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
          <a 
          className='hover:text-white transition-all'
          href="#">
            Return policy</a>
            <a 
          className='hover:text-white transition-all'
          href="#">
            Track your order</a>
             <a 
          className='hover:text-white transition-all'
          href="#">
            shipping & delivery</a>
        </div>

        {/* socials */}
        <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
        <a 
          className='hover:text-white transition-all'
          href="#">
            <FaYoutube /></a>
            <a 
          className='hover:text-white transition-all'
          href="#">
           <FaInstagram /></a>
            <a 
          className='hover:text-white transition-all'
          href="#">
           <FaTwitter /> </a>
            <a 
          className='hover:text-white transition-all'
          href="#">
            <FaFacebook /></a>
        </div>
      </div>
      
      {/* copyright */}
      <div className='py-10 border-t border-t-white/10'>
        <div className='container mx-auto'>
          <div className='text-center text-sm text-white/60'>
            Copyright &copy; PhotoLand. {new Date().getFullYear()}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;

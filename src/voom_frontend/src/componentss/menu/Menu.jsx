import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='bg-[#F8F9FB] p-4 flex flex-col gap-2 absolute top-[100%] left-0 z-20 w-[100px] rounded-[10px] shadow-md'>
        <Link to="./register" className="text-[16px] text-[#1D1E20] font-[600]">Sign Up</Link>
        <Link to="./sign-in" className="text-[16px] text-[#1D1E20] font-[600]">Sign In</Link>
    </div>
  )
}

export default Menu
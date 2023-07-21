import { CiMail } from 'react-icons/ci';
import { HiLockClosed } from 'react-icons/hi';
import { BiSolidUser } from 'react-icons/bi';
import Link from 'next/link';

// Components
import { InputElement } from '../shared/inputElement';

const RegisterForm = () => {

    return (
        <div>

            <p className="
                text-zinc-800 text-[26px] font-bold
            ">Hello!</p>
            <p className="text-zinc-800 text-lg font-normal mb-[40px]">
                Sign Up to Get Started
            </p>

            <form action="#" method="get" className='flex flex-col gap-[16px]'>

                <InputElement
                    InputIcon={BiSolidUser}
                    placeholder='Full Name'
                    inputType='text'
                />

                <InputElement
                    InputIcon={CiMail}
                    placeholder='Email Address'
                    inputType='email'
                />

                <InputElement
                    InputIcon={HiLockClosed}
                    placeholder='Password'
                    inputType='password'
                />

                

                <input type="submit" value="Register" className='bg-[#0575E6] text-white px-[26px] py-[18px] cursor-pointer text-[14px] text-[400] font-normal text-sm rounded-[30px] text-center ' />

                <p className='opacity-40'>
                    already have an account? <Link className='text-[blue]' href="/">Log In</Link>
                </p>



            </form>

        </div >
    )

};

export default RegisterForm;
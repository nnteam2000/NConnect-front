import { CiMail } from 'react-icons/ci';
import { HiLockClosed } from 'react-icons/hi';
import Link from 'next/link';


import { InputElement } from '../shared/inputElement';

const LoginForm = () => {

    return (
        <div>

            <p className="
                text-zinc-800 text-[26px] font-bold
            ">Hello Again!</p>
            <p className="text-zinc-800 text-lg font-normal mb-[40px]">
                Welcome Back
            </p>

            <form action="#" method="get" className='flex flex-col gap-[16px]'>

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

                <input type="submit" value="Login" className='bg-sky-650 text-white px-[26px] py-[18px] cursor-pointer text-[14px] text-[400] font-normal text-sm rounded-[30px] ' />

                <Link href="/register" className='bg-sky-650 text-white px-[26px] py-[18px] cursor-pointer text-[14px] text-[400] font-normal text-sm rounded-[30px] text-center '>
                    Register
                </Link>

            </form>

        </div >
    )

};

export default LoginForm;
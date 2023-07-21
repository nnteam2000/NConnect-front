import Image from "next/image";


import styles from './styles/Register.module.css';


import { MainButton } from "@/components/shared/mainButton";
import { RegisterForm } from "@/components/registerForm";

import backgroundImages from '../../public/images/backgroundAdded.png';

const Register = () => {
    return (
        <div className={`flex min-h-screen ${styles['login-page']} `}>
            <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 basis-[60%] relative flex items-center justify-center">
                <Image
                    src={backgroundImages}
                    alt="Background Picture"
                    className="absolute bottom-0 left-0"
                />
                <div className={`w-[410px] z-10 ${styles['login-info']}`}>
                    <h1 className="text-[40px] font-bold text-[White] break-all">NConnectNET</h1>
                    <p className="text-[18px] font-[500] text-[White] tracking-[2px] break-all">
                        Social network for communication and entertainment
                    </p>
                    <MainButton buttonTitle="Read More" />
                </div>
            </div>
            <div className="basis-[40%] flex items-center justify-center">

                <RegisterForm />

            </div>
        </div>
    )
};

export default Register;
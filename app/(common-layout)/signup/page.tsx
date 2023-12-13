"use client"

import Image from "next/image";
import Link from "next/link";
import LoginImg from "@/public/img/login-img.png";
import { SyntheticEvent, useState } from "react";
import { apiRegister } from "@/app/api/yowyob/register";
import { useRouter } from "next/navigation";
import { apiVerifyRegistration } from "@/app/api/yowyob/verify";
import { useAppDispatch } from "@/app/store/hooks";
import { setAccessToken, setUser } from "@/app/store/features/token/tokenSlice";

const Page = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verificationId, setVerificationId] = useState<string>('')
  const [verificationCode, setVerificationCode] = useState<string>('')
  const router = useRouter()
  const [isRegistration, setIsRegistration] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  
  
  const handleSubmitRegister = async (e: SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault();

    const res = await apiRegister(email, password, true)
    console.log(res)
    if( res && res.status === "success"){
      setIsRegistration(prev => !prev)
      setVerificationId(res.verificationId)
    }
  }

  const handleSubmitOtp = async (e: SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault();

    const res = await apiVerifyRegistration(verificationId, verificationCode);
    console.log(res)
    if( res.access_token !== undefined && res.access_token !== ''){
      dispatch(setAccessToken(res.access_token))
      dispatch(setUser({email, firstName, lastName}))
      router.push('/')
    }
    return
  }
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-1)] signup-section">
      <div className="container">
        <div className="flex flex-wrap items-center gap-4 md:gap-0 mx-3">
          <div className="w-full lg:w-1/2">
            {isRegistration ?
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
              <form onSubmit={handleSubmitRegister}>
                <h3 className="mb-4 h3"> Let’s Get Started! </h3>
                <p className="mb-10">
                  Please enter your email address to join us
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      onChange={e => setFirstName(e.target.value)}
                      className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                      placeholder="Enter First Name"
                      id="first-name"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="last-name"
                      className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      onChange={e => setLastName(e.target.value)}
                      className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                      placeholder="Enter Last Name"
                      id="last-name"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="enter-email"
                      className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
                      Enter Your Email ID
                    </label>
                    <input
                      type="text"
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                      placeholder="Enter Your Email"
                      id="enter-email"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="enter-password"
                      className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
                      Enter Your Password
                    </label>
                    <input
                      type="text"
                      onChange={e => setPassword(e.target.value)}
                      className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                      placeholder="Enter Your Password"
                      id="enter-password"
                    />
                  </div>
                  <div className="col-span-12">
                    <p className="mb-0">
                      Do you have an account?
                      <Link
                        href="sign-in"
                        className="link font-semibold text-primary">
                        Signin
                      </Link>
                    </p>
                  </div>
                  <div className="col-span-12">
                    <button
                      type="submit"
                      className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                      <span className="inline-block"> Signup </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            :
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
              <form onSubmit={handleSubmitOtp}>
                <h3 className="mb-4 h3"> Let’s Get Started! </h3>
                <p className="mb-10">
                  Please enter your email address to join us
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <label
                      htmlFor="enter-verification-code"
                      className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
                      Enter Your Verification Code
                    </label>
                    <input
                      type="number"
                      onChange={e => setVerificationCode(e.target.value)}
                      className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                      placeholder="Enter Your Verification Code"
                      id="enter-verification-code"
                    />
                  </div>
                  <div className="col-span-12">
                    <p className="mb-0">
                      {"Don't receive email?"}
                      <Link
                        href="sign-in"
                        className="link font-semibold text-primary">
                        resend
                      </Link>
                    </p>
                  </div>
                  <div className="col-span-12">
                    <button
                      type="submit"
                      className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                      <span className="inline-block"> Signup </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            }
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={LoginImg} className="w-full xxl:mr-[-200px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

import { BellIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import Image from 'next/image';

import twitter from '../../public/twitter.svg';
import tiktok from '../../public/tiktok.svg';
import facebook from '../../public/facebook.svg';

export const InfoBlock = () => {
    return (
        <div className="pt-4 mt-4 border-t-2 border-t-zinc-700">
            <p className=" text-zinc-500 font-bold">Help & Support</p>
            <div className="flex gap-2 my-4 items-center hover:text-cyan-700 duration-300 cursor-pointer">
                Need help? <Link href='/' className=" text-green-500 underline">Contact us</Link>
            </div>

            <div className="flex gap-2 items-center ml-[-8px] pb-8 justify-between">
                <Link href='/1' className="hover:opacity-70 duration-100">
                    <Image  priority  src={tiktok} className="p-0 h-12 w-12" alt="tiktok icon" />
                </Link>

                <Link href='/2' className="hover:opacity-70 duration-100" >
                    <Image  priority  src={twitter} className="h-12 w-12" alt="twitter icon" />
                </Link>

                <Link href='/3' className="hover:opacity-70 duration-100" > <Image  priority  src={facebook} className="h-12 w-12" alt="facebook icon" /></Link>
                <Link href='/4' className="hover:opacity-70 duration-100" >  <BellIcon className="h-10 w-10 fill-green-600" /></Link>
            </div>
        </div>
    )
}
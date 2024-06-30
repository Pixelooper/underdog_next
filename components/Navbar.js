import Image from "next/image";
import styles from '@/styles';
import Link from "next/link";
import { AntButton } from "@/components/Button";

export default function Navbar () {

  return (
    <nav
      className={`${styles.paddings} py-8 relative`}
    >  
        <div className={`${styles.innerWidth} ${styles.flexBetween} mx-auto`}>
            {/* ----------MOBILE MENU---------- */}
            {/* <div className="flex items-center lg:hidden">
                <div className="drawer  z-[999999] w-[50px]">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="drawer-button">
                            <div className='lg:hidden'>
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                src="/ubehero-dark.svg"
                                alt="Ubehero Logo"
                                width={145}
                                height={50}
                                priority
                            />
                            </div>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu p-4 w-80 min-h-full bg-zinc-900 text-white text-center pt-10">
                            <div className='flex justify-end '>
                                <label htmlFor="my-drawer" className="drawer-button">
                                    <div className='lg:hidden border-2 border-zinc-200 rounded-md p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </div>
                                </label>
                            </div>
                            <Link href='/' className='hover:bg-zinc-700 rounded-md'>
                                <h3 className="hover:text-gray-300 py-2 text-xl">Home</h3>
                            </Link>
                            <Link href='/' className='hover:bg-zinc-700 rounded-md'>
                                <h3 className="hover:text-gray-300 py-2 text-xl">Products</h3>
                            </Link>
                            <Link href='/pricing' className='hover:bg-zinc-700 rounded-md'>
                                <h3 className="hover:text-gray-300 py-2 text-xl">Pricing</h3>
                            </Link>
                            <Link href='/about' className='hover:bg-zinc-700 rounded-md'>
                                <h3 className="hover:text-gray-300 py-2 text-xl">About</h3>
                            </Link>

                            <div className='flex flex-col gap-2 mt-7'>
                                <Link href='/signup'>
                                    <button className='bg-white w-full text-[#060C18] px-7 py-3 rounded-md'>Signup/Login</button>
                                </Link>
                                <button className='bg-sky-500 w-full text-white px-7 py-3 rounded-md'>Contact Sales</button>
                            </div>

                        </div>
                    </div>
                </div>
                <Link href='/'>
                    <div className=' w-[300px]'>
                        <img src="/Horizontal Logo.png" alt="" className=' h-10' />
                    </div>
                </Link>
            </div> */}

            <Link href='/'>
                <div className='hidden lg:block'>
                    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                        src="/ubehero-dark.svg"
                        alt="Ubehero Logo"
                        width={145}
                        height={50}
                        priority
                    />
                    </div>
                </div>
            </Link>

            <div className="hidden lg:flex justify-center relative">
                <div className='bg-[#060C18] w-[510px] px-14 py-2 rounded-full border border-sky-700 flex gap-7'>
                    <Link href='/live' className='hover:text-sky-500 transition duration-200'>
                        Live
                    </Link>
                    <Link href='/parties' className='hover:text-sky-500 transition duration-200'>
                        Parties
                    </Link>
                    <Link href='/teams' className='hover:text-sky-500 transition duration-200'>
                        Teams
                    </Link>
                    <Link href='/leaderboards' className='hover:text-sky-500 transition duration-200'>
                        Leaderboards
                    </Link>
                    <Link href='/games' className='hover:text-sky-500 transition duration-200'>
                        Games
                    </Link>
                </div>
            </div>
            <div className='hidden lg:flex gap-2'>
                <AntButton text="Login" link="/login" textStyles="uppercase bg-[#6600FF] text-white" size="middle" type="default"/>
                <AntButton text="Upgrade" link="/upgrade" textStyles="uppercase text-slate-950" size="middle" type="default"/>
            </div>
        </div>
    </nav>
  );
}

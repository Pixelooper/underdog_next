'use client';

import Image from "next/image";
import styles from '@/styles';
import { H2Text, PText } from "@/components/Text";

export default function ExploreCard({ id, imgUrl, title, subTitle, active, handleClick }) {
    return (
          <div className={`${styles.flexCenter}
              ${active === id ? 'sm:flex-[3.5] flex-none 2xl:min-w-[360px] lg:min-w-[320px] sm:min-w-[280px] min-w-full h-[300px]' : 'sm:flex-[0.5] flex-none 2xl:min-w-[160px] lg:min-w-[130px] sm:min-w-[90px] min-w-full h-[50px]'} 
              relative 2xl:h-[400px] lg:h-[340px] sm:h-[300px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
              onClick={() => handleClick(id)}    
         >
            <Image
                src={imgUrl}
                alt={id}
                width={365}
                height={400}
                className="absolute w-full h-full object-cover sm:rounded-[24px] rounded-[12px]"
                priority
            />
            {
                active !== id ? 
                <H2Text text={title} textStyles="uppercase absolute z-0 sm:bottom-20 sm:left-0 left-5 sm:rotate-[-90deg]" /> :
                <div className={`${styles.flexStart} absolute bottom-0 p-8 w-full flex-col bg-[rgba(0,0,0,0.5)] sm:rounded-b-[24px] rounded-b-[12px]`}>
                    <div className={`w-[50px] h-[50px] glassmorphism p-2 rounded-[6px]`}> 
                        <Image
                            src="/headset.svg"
                            alt="headset"
                            className="w-full h-full object-contain"
                            width={50}
                            height={50}
                        />
                    </div>
                    <H2Text text={title} textStyles="uppercase mt-4" />
                    <PText text={subTitle} textStyles="leading-[20.16px] uppercase" />
                </div>
            }
        </div>
    );
};
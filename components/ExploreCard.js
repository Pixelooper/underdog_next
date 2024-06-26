'use client';

import Image from "next/image";
import styles from '@/styles';
import { H2Text, PText } from "@/components/CustomTexts";

const ExploreCard = ({ id, imgUrl, title, subTitle, active, handleClick }) => {
    return (
        <div className={`${styles.flexCenter}
            ${active === id ? 'lg:flex-[3.5] flex-[10] min-w-[360px]' : 'lg:flex-[0.5] flex-[2] min-w-[160px]'} 
            relative h-[400px] transition-[flex] duration-[0.7s] ease-out-flex  cursor-pointer`}
            onClick={() => handleClick(id)}    
        >
            <Image
                src={imgUrl}
                alt={id}
                width={365}
                height={400}
                className="absolute w-full h-full object-cover rounded-[24px]"
                priority
            />
            {
                active !== id ? 
                <H2Text text={title} textStyles="uppercase absolute z-0 lg:bottom-20 lg:rotate-[-90deg]" /> :
                <div className={`${styles.flexStart} absolute bottom-0 p-8 w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]`}>
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

export default ExploreCard;
'use client';

import { useState } from 'react';
import ExploreCard from "@/components/ExploreCard";
import styles from '@/styles';
import { exploreGames } from '@/constants';
import { H1Text, PText } from "@/components/CustomTexts";

const Test = () => {
    const [active, setActive] = useState('battlefield');

    return (
        <section className={`${styles.paddings}`} id="hero">
            <div className={`${styles.innerWidth} mx-auto`}>
                <div className={`${styles.flexCenter} 2xl:max-w-[1640px] w-full`}>
                    <div className="w-1/3">
                        <H1Text text="Join the Gaming Revolution" textStyles="uppercase" />
                        <PText text="Take your gaming to the next level with our exclusive content and features" textStyles="text-[24px] md:text-[24px]" />
                    </div>

                    <div className="mt-[50px] flex lg:flex-row flex-col gap-5">
                        {exploreGames.map((games, index) => (
                            <ExploreCard
                                key={games.id}
                                {...games}
                                active={active}
                                handleClick={setActive}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Test;

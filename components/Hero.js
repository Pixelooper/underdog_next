'use client';

import { useState } from 'react';
import styles from '@/styles';
import { exploreGames } from '@/constants';
import { HeroButton } from "@/components/Button";
import { H1Text, HeroPText } from "@/components/Text";
import ExploreCard from "@/components/ExploreCard";
import { Card } from 'antd';

const { Meta } = Card;

export default function Hero ({ title, subtitle }) {
    const [active, setActive] = useState('battlefield');

    return (
        <>
        <section className={`${styles.paddings}`} id="hero">
            <div className={`${styles.innerWidth} mx-auto`}>
                <div className={`${styles.flexCenter} xl:flex-row flex-col 2xl:max-w-[1640px] w-full`}>
                    <div className="xl:w-1/3 w-full">
                        <H1Text text={title} textStyles="uppercase" />
                        <HeroPText text={subtitle}/>
                        <HeroButton text="Join Now" link="/test" textStyles="uppercase" />
                    </div>

                    <div className="xl:w-2/3 w-full mt-[50px] flex sm:flex-row flex-col lg:gap-5 gap-3 relative">
                        <div className="absolute w-[25%] inset-5 gradient-01" />
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

        <section className={`${styles.paddings}`} id="hero">
            <Card className={`${styles.flexBetween}`}
                hoverable
                style={{
                width: 240,
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </section>
        </>
    );
}

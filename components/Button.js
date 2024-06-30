'use client';

import Link from "next/link";
import { Button } from "antd";

export const HeroButton = ({ text, link, textStyles }) => (
    <Link href={link}>
        <button type="button" className={`flex items-center h-fit mt-4 py-2 px-6 bg-[#6600FF] rounded-[8px] gap-[12px] ${textStyles}`}>
            <span className="font-bold text-[16px] text-white">
                {text}
            </span>
        </button>
    </Link>
);

export const AntButton = ({ text, link, textStyles, size, type }) => (
    <Link href={link}>
        <Button type={type} size={size} className={`${textStyles} `}>{text}</Button>
    </Link>
);
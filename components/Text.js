export const H1Text = ({ text, textStyles }) => (
  <h1 className={`font-bold 2xl:text-[30px] xl:text-[24px] sm:text-[32px] text-[22px] text-secondary-white mt-[8px] ${textStyles}`}>
    {text}
  </h1>
);

export const HeroPText = ({ text, textStyles }) => (
  <p className={`font-normal mt-[8px] 2xl:text-[28px] lg:text-[24px] text-[18px] text-slate-400 ${textStyles}`}>
    {text}
  </p>
);

export const H2Text = ({ text, textStyles }) => (
  <h2 className={`font-semibold lg:text-[28px] text-[18px] text-white ${textStyles}`}>
    {text}
  </h2>
);

export const PText = ({ text, textStyles }) => (
  <p className={`font-normal mt-[8px] text-[12px] text-white ${textStyles}`}>
    {text}
  </p>
);

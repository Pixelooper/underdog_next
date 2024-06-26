export const H1Text = ({ text, textStyles }) => (
  <h1 className={`font-bold 2xl:text-[30px] xl:text-[24px] text-[18px] text-secondary-white mt-[8px] ${textStyles}`}>
    {text}
  </h1>
);

export const H2Text = ({ text, textStyles }) => (
  <h2 className={`font-semibold sm:text-[22px] text-[18px] text-white ${textStyles}`}>
    {text}
  </h2>
);

export const PText = ({ text, textStyles }) => (
  <p className={`font-normal mt-[8px] text-[16px] md:text-[12px] text-white ${textStyles}`}>
    {text}
  </p>
);

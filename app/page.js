import getStatics from "@/lib/api/getStatics";
import Hero from "@/components/Hero";
import styles from '@/styles';

export default async function Home() {
  const statics = await getStatics();
  // console.log("statics?", statics?.data);

  return (
    <main className={`${styles.flexCenter} flex-col p-4`}>
      <Hero 
        title={statics?.data?.countryData?.hero?.h1} 
        subtitle={statics?.data?.countryData?.hero?.p}
      />
    </main>
  );
}

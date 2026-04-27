import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'

export default function Home(){
 return (
  <>
   <Hero />
   <FeatureSection />
   <section className="container-main py-20">
    <div className="rounded-3xl p-10 bg-white text-black">
      <h2 className="text-4xl font-black">Begin Your Reading Journey</h2>
      <p className="mt-4 text-neutral-700">Discover writing created before destiny unfolded.</p>
    </div>
   </section>
  </>
 )
}
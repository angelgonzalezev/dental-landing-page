import { DiscountSection, HeroSection, SearchSection, RatingSection, TestimonialSection } from "./sections"

const HomePage = () => {
  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <HeroSection />
        <SearchSection />
        <DiscountSection />
        <RatingSection />
      </div>
      <TestimonialSection />
    </>
  )
}

export default HomePage
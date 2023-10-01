import { RatingComponent } from '../components'
import HeroImg from '../../../assets/images/hero-img.jpeg'

const HeroSection = () => {
  return (
    <div className='mt-14 lg:flex lg:items-center'>
      <div className='px-3'>
        <h1 className="text-4xl font-black tracking-tight text-gray-900 text-center sm:text-6xl xl:text-7xl max-w-2xl md:text-left">Find the Best Dental Clinics in Your City</h1>
        <h2 className="prose prose-user mt-6 text-lg text-gray-500 text-center sm:text-xl md:text-left">Discover top-rated dental clinics near you and enjoy exclusive discounts with ProDental</h2>
        <RatingComponent className='mt-6' />
      </div>
      <div className='mt-10 pl-4'>
        <img src={HeroImg} alt="Hero Clinic" className='w-full rounded-l-3xl maxWidth:rounded-3xl lg:max-w-2xl'/>
      </div>
    </div>
  )
}

export default HeroSection
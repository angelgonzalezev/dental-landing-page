import TestimonialImg from '../../../assets/images/review-men.png'

const TestimonialSection = () => {
  return (
    <div className="w-full bg-sky-400 px-3 py-12 mt-16">
        <div className='max-w-3xl mx-auto leading-7 text-center text-white md:leading-10'>
            <p className='text-xl font-bold md:text-3xl text-shadow-sm'>"I've saved so much money on my dental treatments with ProDental. Highly recommended!"</p>
        </div>
        <div className='flex flex-col items-center mt-8'>
            <img src={TestimonialImg} alt="Testimonial image" height={56} width={56} className='rounded-full border-white border-2'/>
            <p className='text-lg font-medium text-white mt-3'>Richard Smith</p>
        </div>
    </div>
  )
}
export default TestimonialSection
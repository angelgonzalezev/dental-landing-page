import { BsStarFill } from 'react-icons/bs'
import TestimonialImg from '../../../assets/images/review-men.png'

interface Props {
    className?: string;
}
const RatingComponent = ({ className }: Props) => {
  return (
    <div className={`w-full ${className}`}>
        <div className='flex items-center sm:justify-center gap-3 divide-x divide-gray-300 md:justify-start'>
            <div className='flex flex-row items-center'>
                {[...Array(5)].map((_star, idx) => <BsStarFill color={'#facc14'} key={idx} className='mr-1' />)}
            </div>
            <div className='min-w-0 py-1 pl-3'>
                <p className='text-sm text-gray-500'>Trusted ratings</p>
            </div>
            <div className=' py-1 pl-3'>
                <p className='text-sm text-gray-500'>Esclusive discounts</p>
            </div>
        </div>
        <div className='flex sm:justify-center md:justify-start'>
            <div className='flex items-center gap-3 mt-6 max-w-md'>
            <img src={TestimonialImg} alt="Testimonial image" height={56} width={56} className='rounded-full border-blue-500 border-2'/>
            <div>
                <p className='font-black tracking-tight text-gray-900'>"ProDental helped me find a great dental clinic near me. The discounts are a bonus!"</p>
                <p className='sm:pl-2.5 text-sm sm:text-base font-bold text-gray-500'>Luke Scott</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default RatingComponent
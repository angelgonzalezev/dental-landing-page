import DiscountsImg from '../../../assets/images/discounts-img.jpeg'

const DiscountSection = () => {
  return (
    <div className='w-full mt-20 lg:flex lg:items-center'>
      <div className='px-3 order-0 md:px-20'>
        <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">Exclusive discounts</h1>
        <h2 className="prose prose-user mt-6 text-lg text-gray-500 sm:text-xl max-w-xl">With ProDental, you can enjoy exclusive discounts at participating dental clinics. Save money on your dental care.</h2>
      </div>
      <div className='mt-10 pl-4 order-1'>
        <img src={DiscountsImg} alt="Get Discounts" className='w-full rounded-l-3xl maxWidth:rounded-3xl lg:max-w-2xl'/>
      </div>
    </div>
  )
}
export default DiscountSection
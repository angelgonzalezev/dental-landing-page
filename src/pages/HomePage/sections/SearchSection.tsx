import SearchImg from '../../../assets/images/search-img.jpeg'

const SearchSection = () => {
  return (
    <div className='w-full mt-20 lg:flex lg:items-center'>
      <div className='px-3 order-1 md:px-20'>
        <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">Simplify your search</h1>
        <h2 className="prose prose-user mt-6 text-lg text-gray-500 sm:text-xl max-w-xl">ProDental makes it easy to find the best dental clinics in your city. Say goodbye to endless searching and comparing.</h2>
      </div>
      <div className='mt-10 pr-4 order-0'>
        <img src={SearchImg} alt="Search Clinic" className='w-full rounded-r-3xl maxWidth:rounded-3xl lg:max-w-2xl'/>
      </div>
    </div>
  )
}
export default SearchSection
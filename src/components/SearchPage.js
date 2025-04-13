import { useSelector } from "react-redux"
import lang from "../utils/language"

const SearchPage = () => {
  const currLang=useSelector(store=> store.search.language)
  return (
    <div>
        <div className="relative h-screen">
      <div className="absolute inset-0 brightness-50 bg-cover h-screen pointer-events-none -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className='absolute w-screen flex justify-center pt-[12%] gap-2'>
        <input className='w-5/12 cursor-pointer p-3 px-5 text-black bg-white items-center flex rounded-md '
         placeholder={lang[currLang].GptPlaceholder}/>  {/* placeholder={lang.hindi.GptPlaceholder */}

        <button className=" cursor-pointer p-3 px-5 text-white bg-black border-2 items-center flex rounded-md">{lang[currLang].search}</button>
      </div>
      </div>
    </div>
  )
}

export default SearchPage
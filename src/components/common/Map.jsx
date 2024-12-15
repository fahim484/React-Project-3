import { cn } from "@nextui-org/react"


function Map({ isDark }) {
  return (
    <section className={cn('bg-[#F5FAFF] pt-10 pb-[85px] px-10', isDark && "bg-black")} style={{boxShadow: '0px -1px 0px 0px #9A9FBF1A'}}>
       <div className='w-[80%] mx-auto'>
       <img className='w-full object-cover rounded-lg md:rounded-3xl' src={isDark ? "./Img/club/club-map.png" : "./Img/map.png"} alt="" />
       </div>
    </section>
  )
}

export default Map
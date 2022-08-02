import React from 'react' 
import Image from 'next/image'
let data = [
,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]
function Thumbnail() {
  return (
    <div className='px-5 grid grid-cols-3 gap-9 mt-10'>
       {data.map((el,index)=>(
        <div key={index} className='text-center relative '>

        <Image 
        className='hover:scale-110 '
        layout='responsive'
        src='/images.jpg'
        height={1080}
        width={1920}
        
        />
        <h1 className='text-slate-50'>palm</h1>
        </div>
       ))
       
       }
       

    </div>
  )
}

export default Thumbnail
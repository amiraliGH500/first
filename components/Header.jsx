import {
HomeIcon,
LightningBoltIcon,
CollectionIcon,
UserIcon,
SearchIcon,
BadgeCheckIcon,
} from '@heroicons/react/outline'
import React from 'react'
import Image from "next/image";
import HeaderItems from './headerItems';
function index() {
  return (
   <header className='flex flex-col sm:flex-row justify-between m-5 items-center'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
          <HeaderItems title='home' Icon={HomeIcon}/>
          <HeaderItems title='trending' Icon={LightningBoltIcon}/>
          <HeaderItems title='verified' Icon={BadgeCheckIcon}/>
          <HeaderItems title='collections' Icon={CollectionIcon}/>
          <HeaderItems title='search' Icon={SearchIcon}/>
          <HeaderItems title='account' Icon={UserIcon}/>
        </div>
       <Image
       className='object-contain'
       src='/hulu.png'
       width={200}
       height={200}
       alt=''
       />
   </header>
  )
}

export default index
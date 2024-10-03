import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
     <h1 className='text-4xl font-semibold'>Book website</h1>
     <form className='flex gap-4'>
      <input type="text" placeholder='book title'className='border rounded-md ps-2'/>
      <input type="number" placeholder='release date'className='border rounded-md ps-2'/>
      <Button>Submit</Button>
     </form>
    </div>
  )
}

export default page

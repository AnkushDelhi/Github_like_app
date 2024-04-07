import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const LikesPage = () => {
  return (
    <div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
			<table className='w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>
				<thead className='text-xs uppercase bg-glass'>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center'>No</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							Username
						</th>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
       <tr className='bg-glass border-b'>
         <td className='w-4 p-4'>
          <div className='flex items-center'>
            <span>1</span>
          </div>
         </td>
         <th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap'>
          <img className='w-10 h-10 rounded-full'
          src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=255&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
           alt="user profile" />
           <div className='ps-3'>
            <div className='text-base font-semibold'>basbas</div>
           </div>
           </th>
           
            <td className='px-6 py-4'>das</td>
            <td className='px-6 py-4'>
              <div className='flex items-center'>
              <FaRegHeart  size={22} className='text-red-500 mx-2 mx-2'/>
              Liked your profile
              </div>
            </td>
           

        </tr>
        </tbody>
   </table>
    </div>
  )
}

export default LikesPage
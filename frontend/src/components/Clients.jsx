import { useQuery } from '@apollo/client'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries'
import Spinner from './Spinner'


export default function Clients() {

  const {loading, error, data} = useQuery(GET_CLIENTS)
  if (loading) return <Spinner />
  if (error) return <p>Something went wrong</p>

  return (
    
    //   <div className="overflow-hidden bg-white shadow sm:rounded-lg">
    //   <div className="px-4 py-5 sm:px-6">
    //     <h3 className="text-lg font-medium leading-6 text-gray-900">Clients Information</h3>
    //     <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
    //   </div>
    //   <div className="border-t border-gray-200">
    //     <dl>
    //       <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //         <dt className="text-sm font-medium text-gray-500">Full name</dt>
    //         <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
    //       </div>
    //       <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //         <dt className="text-sm font-medium text-gray-500">Application for</dt>
    //         <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
    //       </div>
    //       <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //         <dt className="text-sm font-medium text-gray-500">Email address</dt>
    //         <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
    //       </div>
    //       <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //         <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
    //         <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
    //       </div>
    //       <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //         <dt className="text-sm font-medium text-gray-500">About</dt>
    //         <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
    //           Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
    //           qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
    //           pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
    //         </dd>
    //       </div>
    //       <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //         <dt className="text-sm font-medium text-gray-500">Attachments</dt>
    //         <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
    //           <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
    //             <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
    //               <div className="flex w-0 flex-1 items-center">
    //                 <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
    //                 <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
    //               </div>
    //               <div className="ml-4 flex-shrink-0">
    //                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
    //                   Download
    //                 </a>
    //               </div>
    //             </li>
    //             <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
    //               <div className="flex w-0 flex-1 items-center">
    //                 <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
    //                 <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
    //               </div>
    //               <div className="ml-4 flex-shrink-0">
    //                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
    //                   Download
    //                 </a>
    //               </div>
    //             </li>
    //           </ul>
    //         </dd>
    //       </div>
    //     </dl>
    //   </div>
    // </div>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-slate-50 white:text-dark white:bg-slate-500">
            Our products
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 white:bg-slate-200 white:text-dark-400">
        <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                
            </tr>
        </thead>
        <tbody>
          {data.clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
        </tbody>
           
    </table>
</div>



  )
     

  
}

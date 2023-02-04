import { FaTrash } from 'react-icons/fa'

const ClientRow = ({ client }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-white white:text-dark whitespace-nowrap white:bg-slate-500">
    {client.name}
    </th>
    <td className="px-6 py-4 bg-white white:text-dark whitespace-nowrap white:bg-slate-50">
    {client.email}
    </td>
    <td className="px-6 py-4 bg-white white:text-dark whitespace-nowrap white:bg-slate-50">
    {client.phone}
    </td>
    <td className="px-6 py-4 bg-white white:text-dark whitespace-nowrap white:bg-slate-50">
    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><FaTrash /></button>
    </td>
</tr>
  )
}

export default ClientRow
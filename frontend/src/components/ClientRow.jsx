
const ClientRow = ({ client }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {client.name}
                </th>
                <td className="px-6 py-4">
                    {client.email}
                </td>
                <td className="px-6 py-4">
                    {client.phone}
                </td>
                <td className="px-6 py-4">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button>

                </td>
    </tr>
  )
}

export default ClientRow
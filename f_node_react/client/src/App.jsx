import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${api}/api`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className='min-h-screen pb-10 text-white bg-slate-700'>
      <h1 className="text-3xl font-bold underline text-center py-6 mb-6">
        Node + React App
      </h1>

      <div className="w-full">
        <table className="table-fixed bg-slate-800 w-2/3 m-auto text-center border-separate border-spacing-y-1">
          <thead className="bg-slate-900 h-12">
            <tr>
              <th className="border-b border-slate-600 text-sm py-2">Name</th>
              <th className="border-b border-slate-600 text-sm py-2">Email</th>
              <th className="border-b border-slate-600 text-sm py-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((emp, index) => (
              <tr
                key={index}
                className="bg-slate-800 hover:bg-slate-600 transition-all text-sm"
              >
                <td className="py-2 border-b border-slate-700">{emp.name}</td>
                <td className="py-2 border-b border-slate-700">{emp.gmail}</td>
                <td className="py-2 border-b border-slate-700">{emp.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App

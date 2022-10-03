import React,{useState, useEffect} from 'react'
import UsersServer from '../API/UsersServer'
import { useNavigate, Link } from 'react-router-dom';



function Users() {
  const [Users, setUsers] = useState([])
  // const navigate = useNavigate();
  


    async function fetchUseres(){
      const users = await UsersServer.getAll()
      setUsers(users.data)
    }

    useEffect(() => {
        fetchUseres()
    }, [])


  return (
    <>

    <div className='bg-white rounded-lg ml-96'>
      {
        Users.map(element => {
          return(
              <div className = "flex mb-4 br-2 ml-64 pt-10 items-center" key={element.id}>
                  <img className = "rounded-full" src={element.avatar}/>
                  <div className='ml-5 text-xl'>
                    <div className='text-xl font-bold'>{element.first_name} {element.last_name}</div>
                    <div className=''>{element.email}</div>
                  </div>
                    <div>
                      <Link className=' text-slate-500 border border-slate-500 rounded-md px-2 py-1 hover:text-slate-800 ml-32' to={`/users/${element.id}`}>
                        View
                      </Link>
                    </div>
              </div>
          )
        })
      }
    </div>
    
    </>
  )
}

export default Users
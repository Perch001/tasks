import Login from '../Page/Login'
import Error from '../Page/Error'
import UserIdPage from '../Page/UserIdPage'
import Users from '../Page/Users'
import Profile from '../Page/Profile'



export const isAuthYes = [
    {path: "/Error", element: <Error />, exact: true},
    {path: "/users/:id", element: <UserIdPage />, exact: true},
    {path: "/", element: <Users />, exact: true},
    {path: "/profile", element: <Profile />, exact: true},
    {path: "/login", element: <Login />, exact: true}
]

export const isAuthNot = [
    {path: "/", element: <Login />, exact: true}
]
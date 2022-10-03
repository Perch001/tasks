import React, { useContext } from 'react'
import { Route, Routes, redirect } from 'react-router-dom'
import { isAuthNot, isAuthYes } from '../router/RouterIndex'
import { AuthContext } from './Context'
import Navbar from './NavBar/NavBar'

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return(
        isAuth
        ?
        <>
            <Navbar />
            <Routes>
                <Route>
                        {
                            isAuthYes.map(route => 
                                <Route 
                                    path={route.path}
                                    element={route.element}
                                    exact = {route.exact}
                                    key={route.path}
                                />
                            )
                        } 
                        
                </Route>                
            </Routes>
        </>
        : 
        <Routes>
            <Route>
                    {
                        isAuthNot.map(route => 
                            <Route 
                                path={route.path}
                                element={route.element}
                                exact = {route.exact}
                                key={route.path}
                            />
                        )
                    } 
            </Route> 
        </Routes>
        
        
    )
}

export default AppRouter
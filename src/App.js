import React, { useState } from 'react'
import '../src/index.css'
import 'antd/dist/antd.css'

import {BrowserRouter} from "react-router-dom";
import AppRouter from './Components/AppRouter';
import { AuthContext } from './Components/Context/index'
function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <>
      <div>
        <AuthContext.Provider value={{
          isAuth,
          setIsAuth
        }}>
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
    </>
  );
}

export default App;

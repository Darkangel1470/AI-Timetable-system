import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const AuthLayout = () => {
  const isAuth = false;

  return (
    <>
      { isAuth? (
          <Navigate to="/"/>
        ) : (
          <>
            <section className='flex flex-1 justify-center items-center'>
              <Outlet />
            </section>
          </>
        )
      }
    </>
  )
}

export default AuthLayout
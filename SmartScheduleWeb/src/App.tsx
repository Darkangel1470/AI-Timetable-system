import './Global.css';
import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import { Home } from './_root/pages';
import RootLayout from './_root/RootLayout';
import ManageTeachers from './_root/pages/ManageTeachers';
import ManageBatches from './_root/pages/ManageBatches';
import ManageSubjects from './_root/pages/ManageSubjects';


const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes for anyone to access */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        {/* Privae routes for only specific users */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/manageteachers" element={<ManageTeachers />} />
          <Route path="/managebatches" element={<ManageBatches />} />
          <Route path="/managesubjects" element={<ManageSubjects />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
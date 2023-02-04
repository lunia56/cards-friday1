import { Navigate, Route, Routes } from 'react-router-dom'

import Error404 from '../../../n2-features/f0-test/Error404'
import Login from '../../../n2-features/f0-test/Login'
import Profile from '../../../n2-features/f0-test/Profile'
import RecoveryPassword from '../../../n2-features/f0-test/RecoveryPassword'
import Registration from '../../../n2-features/f0-test/Registration'
import SetPassword from '../../../n2-features/f0-test/SetPassword'
import Test from '../../../n2-features/f0-test/Test'

export const PATH = {
  LOGIN: '/login',
  REGISTRATION: '/registration',
  RECOVERY_PASSWORD: '/recovery-password',
  SET_PASSWORD: '/set-password',
  PROFILE: '/profile',
}

function Pages() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.LOGIN} />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword />} />
        <Route path={PATH.SET_PASSWORD} element={<SetPassword />} />
        <Route path={PATH.PROFILE} element={<Profile />} />

        <Route path={'/test'} element={<Test />} />

        <Route path={'/*'} element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default Pages

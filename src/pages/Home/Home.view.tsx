import { ROUTE } from '@src/constants'
import React from 'react'
import {  Link} from 'react-router-dom'

const HomeView = () => {
  return (
    <div><Link to={ROUTE.LOGIN}>Go to Login</Link></div>
  )
}

export default HomeView
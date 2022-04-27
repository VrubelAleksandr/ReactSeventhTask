import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
        <NavLink className='link' to="/">Home</NavLink>
        <NavLink className='link' to="/users">Users</NavLink>
        <NavLink className='link' to="about">About</NavLink>
    </nav>
  )
}

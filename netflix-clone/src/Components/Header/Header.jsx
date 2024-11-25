import React from 'react'
import "./Header.css"
import NetflixLogo from "../../Assets/Images/Netflix_Logo_PMS.png"
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
         <div className='header_left'>
             <ul>
                 <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
                 {/* <li>Netflix</li> */}
                 <li>Home</li>
                 <li>Tvshows</li>
                 <li>Movies</li>
                 <li>Latest</li>
                 <li>MyList</li>
                 <li>Browse by Languages</li>
             </ul>
         </div>
          <div className='header_right'>
           <ul>
            <li><SearchIcon /></li>
            <li><CircleNotificationsIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownCircleIcon /></li>
           </ul>
        </div>
        </div>
    </div>
  )
}

export default Header




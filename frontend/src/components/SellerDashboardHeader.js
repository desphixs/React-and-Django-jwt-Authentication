import React from 'react'
import { Link } from 'react-router-dom'

function SellerDashboardHeader() {
  return (
    <div>
         <div className="">
              <ul className="dashborad-menus">
                  <li className="active">
                    <Link to="/seller-dashboard">
                    <i className="fas fa-grid"></i> <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/seller-dashboard">
                    <i className="fa-solid fa-user"></i> <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-services">
                    <i className="fas fa-list"></i> <span>My Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-orders">
                    <i className="fas fa-list"></i> <span>All Orders <small className='badge bg-success'>1</small> </span>
                    </Link>
                  </li>
                  <li>
                    <a href="bookmarks.html">
                    <i className="fas fa-solid fa-heart"></i> <span>Bookmarks</span>
                    </a>
                  </li>
                  <li>
                    <a href="messages.html">
                    <i className="fa-solid fa-comment-dots"></i> <span>Messages</span>
                    </a>
                  </li>
                  <li>
                    <a href="reviews.html">
                    <i className="fas fa-solid fa-star"></i> <span>Reviews</span>
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                    <i className="fas fa-light fa-circle-arrow-left"></i> <span>Logout</span>
                    </a>
                  </li>
              </ul>
            </div>
    </div>
  )
}

export default SellerDashboardHeader
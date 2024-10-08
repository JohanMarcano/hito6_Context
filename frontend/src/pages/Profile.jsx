import React from 'react'
import { Link } from 'react-router-dom';


const Profile = () => {
  
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">Profile</h1>
            <p class="lead">
                random-email@example.com
            </p>            
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
        </div>
    </div>
  )
}

export default Profile
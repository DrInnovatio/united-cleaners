import React from 'react'
import '../../App.css'
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStore } from 'react-icons/fa';

export default function Products() {
  return (
    <div className="products">
      <h2 >You can download the apps right now</h2>
      <div style={ { textAlign: "center" } }>
        <h4>Sorry. This application is still beta version,</h4>
        <h5>and being tested with the students of</h5>
        <div style={ { fontSize: "25px", margin: "20px", color: "#2ec1ac" } }>
          <li>Queensland University of Technology</li>
          <li>University of Queensland</li>
          <li>Griffith University</li>
          <li>Central Queensland University</li>
        </div>
      </div>

      <div className="react-icons">
        <FaGooglePlay />
        <FaAppStore />
      </div>
    </div>
  )
}


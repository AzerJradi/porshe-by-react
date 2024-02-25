import React from 'react'
import '../CSS/FindCar.css'
function FindCar() {
  return (
    <>
    <img src="https://images-porsche.imgix.net/-/media/3ECDD9AEFB684670A26CF40722AB1083_EFC567A5EEF1469FAABFB50EAD0C0D05_Enhanced-Finder_4-3?w=479&q=85&auto=format" alt="" className="White-car" />
    <p className="FindCar-title"> Find your new or used Porshe </p>
    <p className="FindCar-des"> Easily find the Porsche of your dreams. Enter your location and browse the best vehi- cle offers near you. </p>
    <p className="FindCar-searchTitle"> Indicate a location for your search </p>
    <div className="group">
    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
    <g>
    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
    </g>
    </svg>
    <input placeholder="City or ZIP code" type="search" className="input"/>
    </div>

    </>
  )
}

export default FindCar

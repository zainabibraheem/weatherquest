import React, { useEffect } from 'react'

 const BaseURL = 'http://api.weatherapi.com/v1/current.json'
const APIKey = '26404f9e4c8f42fcac3121425232708'

function Weatherinfo() {
 
 useEffect(() => {
  fetch('http://api.weatherapi.com/v1/current.json?q=lagos&key=26404f9e4c8f42fcac3121425232708')
  .then (res => res.json())
  .then (data => console.log(data))
  .catch(error => console.log(error))
 }, [])

  return (
    <div>
      
    </div>
  )
}

export default Weatherinfo

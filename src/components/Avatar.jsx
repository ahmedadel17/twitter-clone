import React from 'react'

function Avatar(props) {
  return (
    <img className="w-14 h-14 rounded-full ml-5 mt-5" src={props.src} alt="Rounded avatar"/>
  )
}

export default Avatar

import React from 'react'

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`bg-white border border-blue-400 text-blue-400 font-semibold  py-2 px-8 rounded leading-tight hover:text-white hover:bg-blue-400 hover:border-blue-400 ${classes}`}
    >
      {children} 
    </button>
  )
}

export default PrimaryButton;

import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'border-b border-gray-600' : 'text-[#adb7be]'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:black dark:hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  )
}

export default TabButton
import React from 'react'

function Section({className,children}) {
  return (
    <section className={` ${className} container mx-auto px-5 pt-20 pb-5 lg:py-20 `}>
      {children}
    </section>
  )
}

export default Section
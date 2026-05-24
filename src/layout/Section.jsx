import React from 'react'

function Section({className,children,container=true,padding=true}) {
  return (
    <section className={` ${className} ${container?'container mx-auto':''}  ${padding?'px-5 pt-20 pb-5 lg:py-20 ':''}`}>
      {children}
    </section>
  )
}

export default Section
import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  console.log(props.user);
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto  flex-nowrap gap-10 p-6 w-2/3'>
      {props.user.map(function(elem,idx){

        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
      })}
      


    </div>
  )
}

export default RightContent

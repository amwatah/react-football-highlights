import React from 'react'

const MatchCard = ({video}) => {
  return (
    <div>
         <div  className="video flex flex-col items-center j border-2 border-white m-1 rounded hover:bg-[#606060] ">
           <div className="match-details font-bold">
               <h1 className=' underline'>{video.competition.name}</h1>
              <h1>{ video.side1.name} vs {video.side2.name}</h1>
              <h1> { video.date }</h1>
              
           </div>
           <div className="thumbnail flex justify-center ">
              <img src={video.thumbnail} alt="thumb-nail" className=" m-1 rounded-md  w-[80%]  h-3/4" />
           </div>
           <div className="link">
           <a href={video.url}>
             <button className="bg-red-500 p-2 m-1  rounded-md">WATCH HIGHLIGHTS</button>
           </a>

           </div>
           

            
           
         </div>
    </div>
  )
}

export default MatchCard
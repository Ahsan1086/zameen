import React, { Component, useState } from 'react'
import './Secondnav.css'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";


const secondnav=[
    {
        icon:"Zameen",
        class:"logo",
    },
    {
        icon:"BUY",
        class:"buy",
        arrow: <MdKeyboardArrowRight />
    },
    {
        icon:"HOMES",
        class:"homes buy1"
    },
    {
        icon:"PLOTS",
        class:"plots buy1"
    },
    {
        icon:"COMMERCIAL",
        class:"commercial buy1"
    },
    {
        icon:"RENT",
        class:"rent"
    },
    {
        icon:"AGENTS",
        class:"agents"
    },
    {
        icon:"NEW PROjECTS",
        class:"newprojects"
    },
]

export default function Secondnav() {
    
    const [Buy1, setHideBuy1] = useState(false);
    const handleBuyClick = () => {
        setHideBuy1(prevHideBuy1 => !prevHideBuy1);
        //use set-state-name for prev handling
    };

    
  
    return (
      <div className='secondnav'>
        {
            
            secondnav.map((i,j)=>(
                <Link 
                className={i.class} key={j}
                style={i.class.includes('buy1') && Buy1 ? { display: 'none' } : {}}
                onClick={i.class === 'buy' ? handleBuyClick : ""}
                
                
                
                > {i.icon} {i.arrow}</Link>
            ))
        }
      </div>
    )
  }


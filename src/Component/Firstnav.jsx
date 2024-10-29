import React, { Component } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Firstnav.css'
import { FaPlus } from "react-icons/fa6";
import pakflag from '../media/images.png'
import { IoMdSettings } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";



const firstnav=[

    {
      icon:<FaHome/>
    },
    {
        item:"PLOT-FINDER"
    },
    {
        item:"AREA-GUIDES",
        class:"area-guides"
    },
    {
        item:"BLOGS",
        class:"blogs"
    },
    {
        item:"MAPS",
        class:"maps"
    },
    {
        item:"TOOLS",
        icon:<TiArrowSortedDown />
    },
    {
        item:"MORE",
        icon:<TiArrowSortedDown />
    },
]

export default class Firstnav extends Component {
  render() {
    return (
      <div className='navbar1'>
        <div className="first">
        {
          firstnav.map((i,j)=>(
            <Link to="" className={i.class}> {i.item} {i.icon} </Link>
          ))
        }
        </div>
        <div className="second">
          <input type="search" className='form-control' placeholder='Property ID' style={{height:"25px",width:"130px",backgroundColor:"transparent",color:"white"}} />
          <button className='add'> <FaPlus /> Add Property </button>
          <img src={pakflag} alt="" className='pakflg'/>
          <button className='setting'><IoMdSettings /></button>
          <button className='setting'><IoPersonOutline /></button>
        </div>
      </div>
    )
  }
}

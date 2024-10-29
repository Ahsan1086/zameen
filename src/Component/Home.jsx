import React, { useState } from 'react'
import bgimg from  '../media/pexels-pixabay-262367.jpg'
import './Home.css'

const selectdata=[
  {
    value:"lahore",
    data:"Lahore"
  },
  {
    value:"lahore",
    data:"Lahore"
  },
  {
    value:"lahore",
    data:"Lahore"
  },

]
export default function Home() {
  const [Buy1, setHideBuy1] = useState(false);
    const handleBuyClick = () => {
        setHideBuy1(prevHideBuy1 => !prevHideBuy1);
        //use set name for prev handling
    };
  return (
    <div style={{backgroundImage:`url(${bgimg})`}} className='home'>
        <h2 className='text-center text-light'>Search Properties for Sale in Pakistan</h2>

        <div className="btn-group">
          <button onClick={handleBuyClick}>BUY</button>
          <button>RENT</button>
          <button >PROJECTS</button>
        </div>

        <form action="" className=''>
          <div className="row p-3 bg-black">

            <div className="col-3 city mb-3">
              <label htmlFor=""  className='ms-2'>CITY</label>
              <select class="form-select ">
                {
                  selectdata.map((i,j)=>(
                    <option value={i.value}>{i.data}</option>
                  ))
                }
              </select>
            </div>

            <div className="col-6 location  mb-3">
              <label htmlFor="" className='ms-2'>Location</label>
              <input type="text" />
            </div>


            <div className="col-3 find  mb-3">
              <label htmlFor="" ></label>
              <button>Find</button>
            </div>

            <div className="col-3 city  mb-3">
              <label htmlFor="" className='ms-2'>Property Type</label>
              <select class="form-select ">
                {
                  selectdata.map((i,j)=>(
                    <option value={i.value}>{i.data}</option>
                  ))
                }
              </select>
            </div>
            <div className="col-3 city  mb-3">
              <label htmlFor="" className='ms-2'>Property Type</label>
              <select class="form-select ">
                {
                  selectdata.map((i,j)=>(
                    <option value={i.value}>{i.data}</option>
                  ))
                }
              </select>
            </div>
            <div className="col-3 city  mb-3">
              <label htmlFor="" className='ms-2'>Property Type</label>
              <select class="form-select ">
                {
                  selectdata.map((i,j)=>(
                    <option value={i.value}>{i.data}</option>
                  ))
                }
              </select>
            </div>
            <div className="col-3 city  mb-3">
              <label htmlFor="" className='ms-2'>Property Type</label>
              <select class="form-select ">
                {
                  selectdata.map((i,j)=>(
                    <option value={i.value}>{i.data}</option>
                  ))
                }
              </select>
            </div>

          </div>
        </form>

    </div>
  )
}

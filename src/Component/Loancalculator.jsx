import React, { useEffect, useState } from 'react'
import './LoanCalculator.css'
import { TbCash } from "react-icons/tb";
import { AiFillBank } from "react-icons/ai";
import { CgMathPercent } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";


const units=[
    { value: 1e5, suffix: ' Lakh',},
    { value: 1e7, suffix: ' Crore', },
    { value: 1e9, suffix: ' Arab', },
]
export default function Loancalculator() {
  const[price,setprice]=useState(0)
  const [downpay,setdownpay]=useState(20)
  const[year,setyear]=useState(1)
  const [showdiv,setshowdiv]=useState(false)
  const [changeflex,setchangeflex]=useState(false)

  const minprice=0;
  const maxprice=10000000;
  const mindownpay=20;
  const maxdownpay=50;
  const minyear=1;
  const maxyear=20;


      const formatPrice = (price) => {
        if(price<1e5){
           return Math.ceil(price.toString());
        }
      
      
        for (let i = units.length - 1; i >= 0; i--) {
           if (price >= units[i].value) {
             const formattedNum = (price / units[i].value).toFixed(2);
             return formattedNum + units[i].suffix;
           }
         }
      }    ;


    const handlePriceChange = (value) => {
        if (value >= minprice && value <= maxprice) {
            setprice(value);
        }
      };



      const calculateDownPayment = () => {
        return (downpay / 100) * price
    }
      const handleDownPaymentChange = (value) => {
        if (value >= mindownpay && value <= maxdownpay) {
            setdownpay(value)
        }
    }
      
      const handleYearChange =(value)=>{
        if (value >= minyear && value <= maxyear) {
          setyear(value);
      }
      }

      const handlemonth=()=>{
        return `${year*12} Months`
      }

      const handleinstallment=()=>{
        const loanAmount = price - initialdeposit();
        const annualInterestRate = 3; // 3% interest
        const monthlyInterestRate = annualInterestRate / 12 / 100;
        const totalMonths = year * 12;
    
        // Amortization formula
        const monthlyInstallment = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths) 
                                   / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    
        return monthlyInstallment;
      }

      const initialdeposit=()=>{
        let x=(downpay/100)*price
        return x;
      }

      const calulateloan=()=>{
        setshowdiv(true);
        setchangeflex(true)
      }

      useEffect(()=>{
        
      },[])


  return (
    <div className='abc'>
        <h1 className='text-center py-3'>Home Loan Calculator</h1>

        <div className="abcd">
        <div className={changeflex ? 'calculator1':"calculator"}>
            <div className="cal1">
                <label htmlFor="" className='mb-2'>Property price</label>
                <div className="input mb-2">
                    <span style={{color:"silver"}}>PKR</span>
                    <input type="number" 
                    min={minprice}
                    max={maxprice}
                    value={price}
                    onChange={(e) => handlePriceChange(Number(e.target.value))}/>
                    <span>{
                        formatPrice(price)}</span>
                </div>
                <input type="range" className='form-range'
                 min={minprice}
                  max={maxprice}
                  value={price}
                  onChange={(e) => handlePriceChange(Number(e.target.value))}
                   />
            </div>

            <div className="cal1">
                <label htmlFor="" className='mb-2'>Down Payment</label>
                <div className="input mb-2">
                    <span style={{color:"silver"}}>%</span>
                    <input type="number" 
                    min={mindownpay}
                    max={maxdownpay}
                    value={downpay}
                    onChange={(e) => handleDownPaymentChange(Number(e.target.value))}/>
                    <span>{formatPrice(calculateDownPayment())}</span>
                </div>
                <input type="range" className='form-range'
                 min={mindownpay}
                  max={maxdownpay}
                  value={downpay}
                  onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                   />
            </div>


            <div className="cal1">
                <label htmlFor="" className='mb-2'>Property price</label>
                <div className="input mb-2">
                    <span style={{color:"silver"}}>Years</span>
                    <input type="number" 
                    min={minyear}
                    max={maxyear}
                    value={year}
                    onChange={(e) => handleYearChange(Number(e.target.value))}/>
                    <span>{handlemonth(handleYearChange())}</span>
                </div>
                <input type="range" className='form-range'
                 min={minyear}
                  max={maxyear}
                  value={year}
                  onChange={(e) => handleYearChange(Number(e.target.value))}
                   />
            </div>

            <div className="cal2">
                <button className='calbtn' onClick={calulateloan}>Calculate</button>
            </div>
        </div>

        { showdiv && 
         (
          <div className='loan'>
          <div className="row p-4">
            <div className="col-8">
                <p>Product</p>
                <h2>Ghar Sahulat Scheme</h2>
                <div className="row">

                  <div className=" data col-6 pb-3">
                    <TbCash style={{fontSize:"35px"}}/>
                    <div>
                      <p className='p-0 m-0'>Monthly Installment</p>
                      <p className='p-0 m-0'><span className='pe-3'>PKR</span>{formatPrice(handleinstallment())}</p>
                    </div>
                  </div>

                  <div className=" data col-6 pb-3">
                    <AiFillBank style={{fontSize:"35px"}}/>
                    <div>
                      <p className='p-0 m-0'>Initial Deposit</p>
                      <p className='p-0 m-0'><span className='pe-3'>PKR</span>{formatPrice(initialdeposit())}</p>
                    </div>
                  </div>
                  <div className=" data col-6 pb-3">
                    <CgMathPercent style={{fontSize:"35px"}}/>
                    <div>
                      <p className='p-0 m-0'>Interest</p>
                      <p className='p-0 m-0'>+3%</p>
                    </div>
                  </div>

                  <div className=" data col-6 pb-3">
                    <FaBars style={{fontSize:"35px"}}/>
                    <div>
                      <p className='p-0 m-0'>Loan Type</p>
                      <p className='p-0 m-0'>Conventional</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-4"></div>
          </div>
      </div>
         )
        }
        </div>
    </div>
  )
}

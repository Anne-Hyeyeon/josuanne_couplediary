import React, { useState } from 'react';
import Clock from './Clock';
import style from './App.module.css';


const Ddaycounter = () => {
    const [deadline, setDeadline] = useState('September 18, 2021')
    const [newDeadline] = useState('')
  
    const changeDeadline = () => {
      setDeadline(newDeadline);
    };
    console.log(changeDeadline)
  
    return (
      <div className={style.App}>
          <div className={style.App__title}>{ deadline }</div>
          <span>함께 한 날로부터 어느새</span><Clock deadline={deadline} /><br />
      </div>
    )
  }
  
export default Ddaycounter;
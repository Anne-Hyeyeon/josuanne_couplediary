import React, { useState } from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import style from './App.module.css';


const Ddaycounter = () => {
    const [deadline, setDeadline] = useState('September 18, 2021')
    const [newDeadline, setNewDeadline] = useState('')
  
    const changeDeadline = () => {
      setDeadline(newDeadline);
    };
  
    return (
      <div className={style.App}>
          <div className={style.App__title}>{ deadline }</div>
          <span>함께 한 날로부터 어느새</span><Clock deadline={deadline} /><br />
      </div>
    )
  }
  
export default Ddaycounter;
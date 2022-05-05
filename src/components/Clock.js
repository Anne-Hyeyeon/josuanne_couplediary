import { useEffect, useState } from 'react'
import style from './Clock.module.css'


function Clock(props) {
  const [days, setDays] = useState(0)


  const getTimeUntil = (deadline) => {
    const time = Date.parse(new Date()) - Date.parse(deadline);  

    setDays(Math.floor((time/(1000*60*60*24))));
  }

  useEffect(() => {
    getTimeUntil(props.deadline);
  })

  useEffect(() => {
    setInterval(() => getTimeUntil(props.deadline), 1000)
  }, [props.deadline])

  const leading0 = (num) => {
    return num < 10 ? '0' + num : num
  }

return (
    <div className={style.clock}>
            <div className={style.clock__days}>{leading0(days)} days</div>
        </div>
  )
}

export default Clock
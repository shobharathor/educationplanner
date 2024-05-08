import React,{useState,useEffect} from 'react'
import './Subject.css'

function Subject(props) {
    const [time,setTime] = useState(props.time);

    useEffect(()=>{
      const updatedData=props.subjectData.map((elem,index)=>{
        if(props.id === index){
          elem.time = time;
        }
        return elem;
      })

      props.setSubjectData(updatedData)
    },[time])

    function incrementHandler(id){
      setTime(time + 1);
    }

    function decrementHandler(id){
      setTime(time - 1);
    }

  return (
    <div className='card-container'>
        <p id='input'>{props.subject}</p>
        <p id='input'>{time}</p>
        <button onClick={()=>{incrementHandler(props.id)}} className='btn' >+</button>
        <button onClick={()=>{decrementHandler(props.id)}} className='btn' >-</button>
    </div>
  )
}

export default Subject;
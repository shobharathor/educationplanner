import './LandingScreen.css'
import {useState,useEffect} from 'react'
import SubjectCard from '../Components/Subject'

function LandingScreen(){

    const [subjectData, setSubjectData] = useState(()=>{
        const savedData = localStorage.getItem("subjectData");
        const parsedData = JSON.parse(savedData);
        return parsedData || [];
    })


    useEffect(()=>{
        localStorage.setItem("subjectData",JSON.stringify(subjectData));
        
    },[subjectData])

    function clickHandler(e){
        e.preventDefault();


        const subjectName = document.querySelector("#subject-name");

        const subjectTime = document.querySelector("#subject-time");

        const newSub = {
            subject : subjectName.value,
            time : Number(subjectTime.value)
        }

        subjectName.value = "";
        subjectTime.value = "";

        setSubjectData([...subjectData,newSub])
    }

    return(
        <div id='container'>
            <h1>Education Planner</h1>
            <form id='input-card'>
                <input type='text' id='subject-name' placeholder='Subject'required/>
                <input type='number' id='subject-time' placeholder='Timing' required/>
                <button onClick={clickHandler}>Add</button>
            </form>
            <div id='output'>
                {
                     subjectData.map((elem,index)=>{
                        return <SubjectCard key={index} subject = {elem.subject} time = {elem.time} id={index} setSubjectData = {setSubjectData} subjectData ={subjectData} />
                    })
                }
            </div>
        </div>
    )
}

export default LandingScreen;
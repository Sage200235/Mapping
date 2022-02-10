import React, {useState} from "react"
import './card.css';
import img1 from '../Images/car.jpg'
import img3 from '../Images/dollars.jpg'
import img4 from '../Images/engel.png'
import img2 from '../Images/cover.png'


const Card = () =>{
    const [text, setText] = useState("")
    const [data, setData] = useState([
        {
            id: 1,
            task: "Traveling today",
            // img: img1,
        },
        {
            id: 2,
            task: "Sweeping by 4pm",
            // img: img2,
        },
        {
            id: 3,
            task: "Sweeping by 4pm",
            // img: img3,
        },
        {
            id: 4,
            task: "Sweeping by 4pm",
            // img: img4,
        }
    ])


    const addTask = () => {
        const item = {
            id: data.length + 1,
            task: text
        }
        setData([...data, item]);
        setText("");
    }

   


    console.log(text)
    // console.log(data)

    return(
        <>
        <div className='body'>
            <div className="Inp">
                <input value={text} 
                placeholder="Add Task for Today"
                onChange={(e)=>{
                    setText(e.target.value)
                }}
                /> <button
                onClick={()=>{
                    addTask()
                }}
                >Add</button>
            </div>


            <div  className='Card'>
               {data.map((props)=>(
                    <div  className='Code'>
                    <p>{props.id}</p>
                    <img src={props.img} style={{height: "40px", width: "40px", borderRadius: "50%" }}/>
                    <p>{props.task}</p>
                    <button className='Delete'
                      >DELETE</button>
                </div>
               ))}
            </div>


        </div>
        </>
    )
}

export default Card
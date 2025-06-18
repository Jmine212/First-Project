import "./ShowData.css";
import ShowTable from "./ShowTable";
import {useState} from "react";

const ShowData = (props)=>{
    const {sendData} = props;

    //for Research
    const [Research, setResearch] = useState('')
    const ResearchSub = (event)=>{
        event.preventDefault();
    }
    //for Show Current Date
     const now = new Date();
     const Showdate = now.toLocaleDateString('en-US');

    //for ShowTable
    const [Show, setShow] = useState(true);

    return(
        <div className="ShowData-container">
            <form className="ShowData-f">
                <div className="Research" >
                    <label>Research Phone</label>
                    <input type="text" placeholder="Enter ID ..." value={Research} onChange={(event)=>setResearch(event.target.value)} />
                    <button type="button" onClick={ResearchSub}>Research</button>
                </div>
                <div className="Show-btn">
                    <button onClick={(event)=>{event.preventDefault(),setShow(!Show)}}> {Show ? "Show": "Hide"} </button>
                </div>
            </form>

            <div className="Show-Date">Date: {Showdate}</div>
            <ShowTable Show ={Show} sendData={sendData} />
        </div>
    )
}

export default ShowData;
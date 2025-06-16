import "./ShowData.css";
import ShowTable from "./ShowTable";
import {useState} from "react";

const ShowData = (props)=>{
    const {sendData} = props;

    const [Research, setResearch] = useState('')
    const ResearchSub = (event)=>{
        event.preventDefault();
    }

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

            <div className="Show-Date">Date: 5.10.2012</div>
            <ShowTable Show ={Show} sendData={sendData} />
        </div>
    )
}

export default ShowData;
import './FormCom.css';
import AddInfo from "./AddInfo"
import { useState } from 'react';

const FormComp = (props) => {
    //Handle UserData
    const UserData = (Data)=>{
        props.newUserData(Data);
    }

    const [OpAddInfo, setOpAddInfo] = useState(false)  

    return(
        <div className ="form-container">
            <header>
                
                <AddInfo OpAddInfo = {OpAddInfo} setOpAddInfo={setOpAddInfo} pushUserData = {UserData} />
            </header>
            <form className='from-F'>
                <select className="form-Date">
                    <option>Date: 5.10.2012</option>
                    <option>Date: 6.10.2012</option>
                    <option>Date: 7.10.2012</option>
                </select>

                <div className="form-btn">
                    <button className="OpAddInfo" type='button'><span style={{fontWeight:"bolder"}} onClick={(event)=>setOpAddInfo(true)}>ADD </span>Info</button>
                    <button>Note</button>
                </div>
            </form>

            <div className="Show-Result">
                <div className="Show-Price">
                    <p>Total: 45000 - 15000</p>
                    <p>Result: 30000</p>
                </div>
                <div className="Show-PhoResult">
                    <span>Icon</span>
                    <p>T: 5 <br/> F: 2</p>
                </div>
            </div>
        </div>
    )
}

export default FormComp;
import './AddInfo.css';
import { use, useState } from 'react';

const AddInfo = (props)=>{
    const {OpAddInfo,setOpAddInfo} = props;

    // for input
    const [name, setname] =useState('')
    const [model, setmodel] = useState('')
    const [phone, setphone] = useState('')
    const [pw, setpw] = useState('')
    const [error, seterror] = useState('')
    const [price, setprice] = useState('')
    const [source, setsource] = useState('')

    const SubInfo = (event)=>{
        event.preventDefault()
        const User = {
            key: Math.floor(Math.random() * 1000),
            name: name,
            model: model,
            phone: phone,
            pw: pw,
            error: error,
            price: price,
            source: source
        }
        props.pushUserData(User);

        setname('')
        setmodel('')
        setphone('')
        setpw('')
        seterror('')
        setprice('')
        setsource('')
        alert("Add User Data Success")
        setOpAddInfo(false)
    }

    return(
        <div className="AddInfo-container" style={OpAddInfo === true ? {display:"flex"}: {display:"none"}}> 
            <header>
                <h1>Add User Info</h1>
                <p>Will add new Feature next Ok</p>
            </header>
            <form className='AddInfo-F' onSubmit={SubInfo}>
                <div style={{display:"flex"}}>
                    <p className="AddInfo-Date">Date: 5.10.2005</p>
                    <button className='CloseBtn' type="button" onClick={(event)=>setOpAddInfo(false)}> Close </button>
                </div>

                <div className="Add-Name AddInfo" >
                    <label>Name</label>
                    <input type="text" value={name} onChange={(event)=>setname(event.target.value)} />
                </div>
                <div className="Add-Model AddInfo">
                    <label>Model</label>
                    <input type="text" value={model} onChange={(event)=>setmodel(event.target.value)} />
                </div>
                <div className="Add-Phone AddInfo">
                    <label>Phone Number</label>
                    <input type="text" value={phone} onChange={(event)=>setphone(event.target.value)} />
                </div>
                <div className="Add-Pw AddInfo">
                    <label>Password</label>
                    <input type="text" value={pw} onChange={(event)=>setpw(event.target.value)} />
                </div>
                <div className="Add-Error AddInfo">
                    <label>Error</label>
                    <input type="text" value={error} onChange={(event)=>seterror(event.target.value)} />
                </div>
                <div className="Add-Price AddInfo">
                    <label>Price</label>
                    <input type="number" value={price} onChange={(event)=>setprice(event.target.value)} />
                </div>
                <div className="Add-Source AddInfo">
                    <label>Source</label>
                    <input type="number" value={source} onChange={(event)=>setsource(event.target.value)} />
                </div>
                <div style={{display:"flex"}}>
                    <button className="AddInfo-Sub" type='submit'>Submit</button>
                    {/* <button style={{height:"50px",padding:"2px"}}>sooner</button> */}
                </div>
            </form>
        </div>
    )
}

export default AddInfo;
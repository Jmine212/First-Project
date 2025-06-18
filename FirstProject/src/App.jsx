import FormComp from "./FormComp"
import ShowData from "./ShowData"
import { useState } from "react"

const App = (props)=>{
    // User Data
   const [UsersData, setUsersData] = useState([])
       const getUserData = (newData)=>{
           setUsersData((preData)=> [...preData, newData])
       }
    //Daily Note Data
    const [UserDailyNote, setUserDailyNote] = useState([]);
    const getDailynote = (note)=>{
        setUserDailyNote((preData)=> [note, ...preData])
    }
    
    
    return(
        <div className="body">
            <header >
                <h1> First Project </h1>
                <p>this is just Demo use and I will keep update new version </p>
            </header>
            
            <main>
                <FormComp newUserData={getUserData} sendData={UsersData} newDailyNote = {getDailynote} />
                <ShowData sendData={UsersData} />
            </main>
        </div>
    )
}

export default App;
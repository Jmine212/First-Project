import FormComp from "./FormComp"
import ShowData from "./ShowData"
import { useState } from "react"

const App = (props)=>{
    // User Data
   const [UsersData, setUsersData] = useState([])
       const getUserData = (newData)=>{
           setUsersData((preData)=> [...preData, newData])
       }

    // caculate Result
    
    return(
        <div className="body">
            <header >
                <h1> First Project </h1>
                <p>this is just Demo use and I will keep update new version </p>
            </header>
            <main>
                <FormComp newUserData={getUserData} sendData={UsersData}/>
                <ShowData sendData={UsersData} />
            </main>
        </div>
    )
}

export default App;
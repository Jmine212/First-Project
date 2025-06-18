import { useState } from 'react';
import './DailyNote.css';

export default function DailyNote(props) {
    const {Note, setNote} = props;
    
    // Save note function
    const DailyNoteFun = props
    const [DailyNote, setDailyNote] = useState('');
    const SaveNote = (event)=>{
        event.preventDefault();
        props.pushDailyNote(DailyNote); // push Daily to from and parent component
        setDailyNote(''); // Clear the textarea after saving
        setNote(false); // Close the note after saving
    }

    return(
        <div className="DailyNote-container" style={Note === true ? {display:"flex"}: {display:"none"}}>
            <header className="DailyNote-header">
                <h1>Daily Note</h1>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p>Date: 5.10.2005</p>
                    <p>Time: 1h: 5m</p>
                </div>
                <form>
                    <div className="DailyNote-InpText" onSubmit={SaveNote}>
                        <textarea placeholder='Write...' value={DailyNote} onChange={(event)=>setDailyNote(event.target.value)} />
                        <button type="submit" onClick={SaveNote}> Save </button>
                        <button type="button" onClick={(e)=>setDailyNote('')}> Clear </button>
                        <button type="button" onClick={(e)=>setNote(false)}> Close </button>
                    </div>
                </form>
            </header>
        </div>
    )
}
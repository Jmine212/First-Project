import "./ShowData.css";

const ShowTable = (props) => {
    const {Show,sendData} = props

    // claculate for Result
    let Price = 0, Source = 0;
    for(let i = 0; i<sendData.length; i++){
        Price += Number(sendData[i].price)
        Source += Number(sendData[i].source)
    }
    let Result = Price - Source


    return(
        <div className="Show-Table" >
                <div className="Th-row">
                    <div className="Th-col col1">ID</div>
                    <div className="Th-col col2">Model</div>
                    <div className="Th-col col3">Error</div>
                    <div className="Th-col col4">Price</div>
                    <div className="Th-col col5" >Source</div>
                </div>

                {Show && sendData.map((e)=>{
                    return(
                        <div className="Tb-row" key={e.key} style={e.price>e.source ? {borderRight:"solid 2px green"}: {borderRight:"solid 2px red"}}>
                            <div className="Tb-col col1">{e.key}</div>
                            <div className="Tb-col col2">{e.model}</div>
                            <div className="Tb-col col3">{e.error}</div>
                            <div className="Tb-col col4">{e.price}</div>
                            <div className="Tb-col col5" >{e.source}</div>
                        </div>
                    )
                })}

                <div className="Show-Price">
                    <p>Total: {Price} - {Source}</p>
                    <p style={Price>Source? {color:"blue"}: {color:"red"}}>Result: {Result}</p>
                </div>
        </div>
    )
}

export default ShowTable;
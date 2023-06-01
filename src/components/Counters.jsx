import LetterCounter from "./LetterCounter";
import WordCounter from "./WordCounter";

export default function Counters(props){

    
    

        return(
                <div className="container" style={{ display: "flex" }}>
                {/* <div>{LetterCounter(props.text)}</div>
                <div>{WordCounter(props.text)}</div> */}
        <div className="card text-bg-secondary mb-3" style={{width: "18rem",borderRadius:"50%",textAlign:"center" }}>
        <div className="card-header">Word Counter</div>
        <div className="card-body">
        <h5 className="card-title">{WordCounter(props.text)}</h5>
        <p className="card-text">Words</p>
        </div>
        </div>
        <div className="card text-bg-info mb-3 mx-5" style={{width: "18rem",borderRadius:"50%",textAlign:"center"}}>
        <div className="card-header">Letter Counter</div>
        <div className="card-body">
        <h5 className="card-title">{LetterCounter(props.text)}</h5>
        <p className="card-text">Letters</p>
        </div>
        </div>
                </div>
        )

}
import LinearProgress from '@mui/material/LinearProgress';

export default function CreateNote(props) {
    const charLimit = 100;
    const charLeft = charLimit - props.inputText.length;
    return (
        <div className="note" style={{background: "rgba(255, 255, 255, 0)"}}>
            <textarea onChange={props.textHandler} cols="10" rows="5" placeholder="Type..." maxLength={100} value={props.inputText}></textarea>
            <div className="note-footer">
                <span className="label">{charLeft}</span>
                <button onClick={props.saveHandler} className="note-save">Save</button>
            </div>
            <LinearProgress 
                className="char-progress"
                variant="determinate"
                value={charLeft}
            />
        </div>
    );
}
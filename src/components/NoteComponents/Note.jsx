import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Note(props) {
    return (
        <div className="note">
            <div className="note-body">
                {props.text}
            </div>
            <div className="note-footer" style={{justifyContent: "flex-end"}}>
                <DeleteForeverIcon onClick={() => props.deleteNote(props.id)} className="note-delete" aria-hidden="true"/>
            </div>
        </div>
    );
}
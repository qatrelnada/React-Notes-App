import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, date, handleDelNote }) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever 
                    onClick={() => handleDelNote(id)} 
                    className='delete-icon' 
                    size='1.5em' />
            </div>
        </div>
    )
}

export default Note;
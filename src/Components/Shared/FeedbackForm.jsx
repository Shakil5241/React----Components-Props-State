import { useState } from "react"
import Card from "./card"
import Button from "./Button"
function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setmessage]=useState('')
    const handleTextChange = (e) => {
        if(text==='') {
            setBtnDisabled(true)
            setmessage(null)
        }else if(text !== '' && text.trim().length <= 10) {
            setmessage('Text must be at least 10 Chatacters')
            setBtnDisabled(true)
        }else{
            setmessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
  return (
    <Card>
     <form>
         <h2>How would you rate your service with us?</h2>
         <div className="input-group">
             <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
             <Button type="submit" isDisabled={btnDisabled}>Send</Button>
         </div>
              {message && <div className="message">{message}</div>}
         </form>
    </Card>
  )
}

export default FeedbackForm
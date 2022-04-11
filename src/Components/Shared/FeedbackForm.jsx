import { useState, useContext, useEffect } from 'react'
import RatingSelect from "../RatingSelect"
import Card from "./card"
import Button from "./Button"
import FeedbackContext from "../../Context/FeedbackContext"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setmessage]=useState('')
    
    const { addFeedback, feedbackEdit,updateFeedback} =
    useContext  (FeedbackContext)

    useEffect(() => {
        console.log(feedbackEdit)
        if ( feedbackEdit && feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
          }
  }, [feedbackEdit])
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
    const handleSubmit=(e)=> {
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback ={
                text,
                rating,
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            addFeedback(newFeedback)
            setText('')
        }
    }
  return (
    <Card >
     <form onSubmit={handleSubmit}>
         <h2>How would you rate your service with us?</h2>
         <RatingSelect select={(rating) =>setRating(rating)} />
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
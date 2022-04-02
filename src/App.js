import { v4  as uuidv4} from 'uuid'
import { useState } from 'react'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import  FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/Shared/FeedbackForm'
import FeedbackData from './Components/data/FeedbackData'
import Card from './Components/Shared/card'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback =(newFeedback) =>{
        newFeedback.id = uuidv4()
          
          setFeedback([newFeedback,...feedback])
    }
    const deleteFeedback = (id)=> { if (window.confirm('Are you sure you want ti delete?')){
     setFeedback(feedback.filter((item)=> item.id !== id))}  
      }
    return (
        <>
         <Header /> 
         <Card/>
         
        <div className='container'>
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
       
       
        </div>
        </>
    )
}
export default App

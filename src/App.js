import { useState } from 'react'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import  FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/Shared/FeedbackForm'
import FeedbackData from './Components/data/FeedbackData'
import Card from './Components/Shared/card'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id)=> { if (window.confirm('Are you sure you want ti delete?')){
     setFeedback(feedback.filter((item)=> item.id !== id))}  
      }
    return (
        <>
         <Header /> 
         
        <div className='container'>
            <FeedbackForm/>
            <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
       
       
        </div>
        </>
    )
}
export default App

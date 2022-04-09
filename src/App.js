

import { BrowserRouter as Router,Route, NavLink } from 'react-router-dom'

import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import  FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/Shared/FeedbackForm'
import AboutIconLink from './Components/Shared/AboutIconLink'


import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './Context/FeedbackContext'
import post from './Components/Shared/post'
function App() {
   
    
    return (
        <FeedbackProvider>
        <Router>
         <Header /> 
        
        
        <div className='container'>
           
            <FeedbackForm />
            <FeedbackStats />
        <FeedbackList  />
       
     <AboutIconLink/>
      
     
        </div>
        </Router>
        </FeedbackProvider>
    )
}
export default App

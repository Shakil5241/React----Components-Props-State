function App() {
    const title = 'Blog post'
    const body = 'This is my blog post'
    const comments = [
        {id: 1, text:'comment one'},
        {id: 2, text:'comment two'},
        {id: 3, text:'comment three'},
        {id: 4, text:'comment four'},
   
    ]
    const Loading = false
    const showComments =true
    if (Loading) return <h1>Loading..</h1>
    const commentBlock = (<div className="comments">
    <h3>comments ({comments.length}) </h3>
    
    <ul>
        {comments.map((comment,index) => (
            <li key={index}>{comment.text}</li>

        ))}
    </ul>
    </div>        )
    return (
        <div className='container'>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>

        {showComments && commentBlock}

        
            </div>
    )
}
export default App
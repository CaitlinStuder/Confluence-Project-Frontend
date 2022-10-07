const Chat = ({descendingOrderMessages}) => {
    return (
        <>
            <div className="chat-display">
                {descendingOrderMessages.map((message, _index) => (
                
                    <div className="help" key={_index}>
                        <div className="chat-message-header">
                            
                            <div className="img-container">
                                <img src={message.img} alt={message.name + ' profile'}/>
                            </div>
                                <span className="message-name"><strong>{message.name}</strong>: </span> 
                                <span className="message-text">{message.message} </span>
                            
                        </div>
                    
                    </div>
                ))}
            </div>
        </>
    )
}

export default Chat
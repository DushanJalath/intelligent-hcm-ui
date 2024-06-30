import React, { useState } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim() === '') return;

        // Add user message to messages with a user emoji
        const userMessage = { sender: 'user', text: `😃 ${input}` };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);

        // Call the RAG API
        try {
            const response = await fetch('http://127.0.0.1:8000/get_response', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: input })
            });
            const data = await response.json();

            // Add RAG model response to messages with a bot emoji
            const botMessage = { sender: 'bot', text: `🤖 ${data.response}` };
            setMessages([...newMessages, botMessage]);
        } catch (error) {
            console.error('Error fetching RAG response:', error);
            const errorMessage = { sender: 'bot', text: '🤖 Sorry, something went wrong.' };
            setMessages([...newMessages, errorMessage]);
        }

        // Clear the input field
        setInput('');
    };

    return (
        <div className="chatbot">
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;



// Event listener for the "send" button
document.getElementsByClassName('send-button')[0].addEventListener('click', function() {
    const input = document.getElementsByClassName('input')[0]; 
    const messageText = input.value.trim(); 
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0]; 

    if (messageText || file) {
        if (messageText) {
            addMessageToChat(messageText, 'user');
        }
        
        if (file) {
            const fileURL = URL.createObjectURL(file); 
            addImageToChat(fileURL, 'user'); 
        }

        input.value = ''; 
        fileInput.value = ''; 
        getBotResponse(messageText); 

        
        const mainContent = document.getElementsByClassName('main')[0];
        mainContent.style.display = 'none'; 

        const chatDisplay = document.getElementsByClassName('chat-display')[0];
        const chatButton = document.getElementsByClassName('chatbutton')[0];
        chatDisplay.style.display = 'block'; 
        chatButton.style.display = 'flex'; 
    } else {
        alert('Please enter a message or upload an image!');
    }
});

// Function to add a message to the chat display
function addMessageToChat(message, sender) {
    const chatDisplay = document.getElementsByClassName('chat-display')[0];
    const messageElement = document.createElement('div'); 
    messageElement.textContent = message; 
    messageElement.classList.add('message'); 


    if (sender === 'user') {
        messageElement.classList.add('user-message');
        messageElement.style.color = 'blue'; 
        messageElement.style.margin = '10px 0'; 
        messageElement.style.padding = '10px'; 
        messageElement.style.backgroundColor = '#e0f7fa'; 
        messageElement.style.borderRadius = '10px'; 
    } else {
        messageElement.classList.add('bot-message');
        messageElement.style.color = 'green'; 
        messageElement.style.margin = '10px 0'; 
        messageElement.style.padding = '10px'; 
        messageElement.style.backgroundColor = '#ffe0b2'; 
        messageElement.style.borderRadius = '10px'; 
    }


    chatDisplay.appendChild(messageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Function to add an image to the chat display
function addImageToChat(imageURL, sender) {
    const chatDisplay = document.getElementsByClassName('chat-display')[0]; 
    const imageElement = document.createElement('img'); 
    imageElement.src = imageURL; 
    imageElement.classList.add('chat-image'); 
    imageElement.style.maxWidth = '100px'; 
    imageElement.style.borderRadius = '10px'; 
    imageElement.style.margin = '5px 900px'; 

   
    if (sender === 'user') {
        imageElement.style.border = '2px solid blue'; 
    } else {
        imageElement.style.border = '2px solid green'; 
    }

    
    chatDisplay.appendChild(imageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Function to generate bot responses
function getBotResponse(userMessage) {
    let botResponse;

    // Simple bot responses based on keywords
    if (userMessage.toLowerCase().includes('hi')) {
        botResponse = 'Hi there! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('hello')) {
        botResponse = 'Hi there! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('how are you')) {
        botResponse = 'I am just a bot, but I am here to help you!';
    } else if (userMessage.toLowerCase().includes('help')) {
        botResponse = 'Sure! What do you need help with?';
    } else {
        botResponse = "I'm sorry, I didn't understand that.";
    }

    addMessageToChat(botResponse, 'bot'); 
}

// Event listener for the "Logo AI" button to go back to the main section
document.getElementsByClassName('logo-ai')[0].addEventListener('click', function() {
    const mainContent = document.getElementsByClassName('main')[0];
    mainContent.style.display = 'block';

    const chatDisplay = document.getElementsByClassName('chat-display')[0];
    const chatButton = document.getElementsByClassName('chatbutton')[0];
    chatDisplay.style.display = 'none'; 
    chatButton.style.display = 'block'; 
});


document.querySelector('.toggle').addEventListener('click', function() {
    const centerDiv = document.querySelector('.center'); 
    const chat = document.querySelector('.chat-display');
   
    if (centerDiv.style.backgroundColor === 'grey') {
        centerDiv.style.backgroundColor = 'white'; 
    } else {
        centerDiv.style.backgroundColor = 'grey'; 
         
    }

    if(chat.style.backgroundColor === 'grey'){
        chat.style.backgroundColor = 'white';
    }else{
        chat.style.backgroundColor = 'grey';

    }
});




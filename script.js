function sendMessage() {
    let chatInput = document.getElementById('chat-input');
    let message = chatInput.value;

    if (message.trim() !== '') {
        let chatBox = document.getElementById('chat-box');
        let messageElement = document.createElement('div');
        messageElement.className = 'message';

        let user = 'User';  // You can modify this to capture real usernames
        let timestamp = new Date().toLocaleTimeString();

        messageElement.innerHTML = `<span class="user">${user}</span><span class="timestamp">${timestamp}</span><p>${message}</p>`;
        
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        chatInput.value = ''; // Clear the input
    }
}

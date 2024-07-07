function sendMessage() {
    let chatInput = document.getElementById('chat-input');
    let message = chatInput.value;

    if (message.trim() !== '') {
        let chatBox = document.getElementById('chat-box');
        let messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        chatInput.value = ''; // Clear the input
    }
}

// Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    databaseURL: "YOUR_FIREBASE_DATABASE_URL",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database service
var database = firebase.database();

function sendMessage() {
    let chatInput = document.getElementById('chat-input');
    let message = chatInput.value;

    if (message.trim() !== '') {
        let newMessageRef = database.ref('messages').push();
        newMessageRef.set({
            user: "Anonymous",
            text: message,
            timestamp: new Date().toLocaleString()
        });
        chatInput.value = ''; // Clear the input
    }
}

database.ref('messages').on('value', (snapshot) => {
    let messages = snapshot.val();
    let chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = ''; // Clear the chat box
    for (let id in messages) {
        let message = messages[id];
        addMessageToChatBox(message);
    }
});

function addMessageToChatBox(message) {
    let chatBox = document.getElementById('chat-box');
    let messageElement = document.createElement('div');
    messageElement.classList.add('message');

    messageElement.innerHTML = `
        <span class="user">${message.user}</span>
        <span class="timestamp">${message.timestamp}</span>
        <p>${message.text}</p>
    `;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

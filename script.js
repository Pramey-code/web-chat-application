const socket = ('http://localhost:6553')
const messageContainer = document.getElementById('send-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')


const name = prompt ('your name')

appendMessage('you joined')
socket.emit('newuser', name)
socket.on('chat-message', data => {
 appendMessage('${data.name} : ${data.message}')
})

socket.on('user-connected', name => {
appendMessage('${name} connected')
})

socket.on('user-disconnected', name => {
appendMessage('${name} disconnected')
}
)

messageForm.addEventListener('submit', e => {
	 e.preventDefault()
	const message = messageInput.value
	appendMessage('You: ${message}')
	socket.emit('send-chat-message', message)
	messageInput.value = ''
})


function appendMessage(message){
const messageElement = document.createElement('div')
messageElement.innerText = message
messageContainer.append(messageElement)
}


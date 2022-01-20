console.log('Hello world!')

const ws = new WebSocket('ws://localhost:8080')

formChat.addEventListener('submit', (e) => {
  e.preventDefault()
  ws.send(textField.value)
})

ws.onopen = (e) => {
  console.log('Hello WebSocket!')
}

ws.onmessage = (e) => {
  const { type, message, id } = JSON.parse(e.data)
  let text = ''
  switch (type) {
    case 'greeting':
      alert(message)
      break
    case 'message':
      text = `${id}: ${message}`
      break
    case 'info':
      text = `System info: ${message}`
      break
    default:
      break
  }

  const elMsg = document.createElement('div')
  elMsg.textContent = text
  subscribe.appendChild(elMsg)
}

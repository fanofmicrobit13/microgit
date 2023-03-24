radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showString("Hello Microbits!")
radio.sendString("Hello")
basic.forever(function () {
	
})

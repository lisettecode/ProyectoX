//PARTE LÓGICA:
function Chat(_nombre, _imagen)
{
	this.nombre =  _nombre;
	this.imagenURL = _imagen;
	this.ultimoMensaje = "";
	this.horaUltimoMensaje = '';

	this.borrarMensajes = function()
	{
		/*alert("borrado");*/
	};
}

var infoListChats = [
	new Chat("chat 1", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 3", 'image/logocodeacademy.png')
];


//PARTE VISUAL:
var liListItem = null;


function headerChatDinamic(_contactName, _imageURL, _estado) {
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML = _contactName;
	chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML = _estado;
	chatHeader.getElementsByTagName('img')[0].src = _imageURL;
}

function initiala() {

	initialaChatList();
}

function initialaChatList() {
	var listChatsLi = document.getElementById("list-chats");

	for (var i in infoListChats) {
		var htmlChatItem = '<li><div class="avatar">' +
			'<img src="' + infoListChats[i].imagenURL +  '" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">' + infoListChats[i].nombre + '</h4>' +
			'<p class="w-last-message" id="mensaje">' + infoListChats[i].ultimoMensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">' + infoListChats[i].horaUltimoMensaje + '</div></li>';
		infoListChats[i].borrarMensajes();
		listChatsLi.innerHTML += htmlChatItem;
	}

	eventsSetChatList();
}


function onMensajeKey(evt) {
	if (evt.keyCode == 13) {
		var inputMessages = document.getElementById("mensajes");

		createChat(inputMessages.value);
		createMessage(inputMessages.value);

		inputMessages.value = "";
	}
}

function createMessage(_mensaje) {
	var htmlMensajeIn = '<div class="w-message w-message-in">' +
		'<div class="w-message-text">' +
		'<h5 class="green-1">Maria Paula Rivarola</h5>' +
		'<p>Jajaja Sii finalmente se corto!!</p>' +
		'<div class="time">11:13</div>' +
		'</div>' +
		'</div>';

	var d = new Date();
	var htmlMensajeOut = '<div class="w-message w-message-out">' +
		'<div class="w-message-text">' +
		'<p>' + _mensaje + '</p>' +
		'<div class="time">' + d.getHours() + ':' + d.getMinutes();
	+'</div>' +
	'</div>' +
	'</div>';

	var mensaje = liListItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
	console.log();


	var elChat = document.getElementById("chat");
	elChat.innerHTML += htmlMensajeOut;
	elChat.scrollTop = elChat.scrollHeight;
}







/*function Chat()
{
	this.nombre = '';
	this.people = [];
	this.messages = [];
	this.chatAvatar = '';
}

function Person(_name, _avatar)
{
	this.name = _name;
	this.avatar = _avatar;
}
function Message(_message, _sender)
{
	this.message = _message;
	this.sender = _sender;
	this.received = false;
}
function Whatsapp()
{
	this.chats = [];
	this.selectedChat = null;
	this.searchChat		= function(_keyword){};
	this.getChatFromId	= function(_chatId){};
	this.drawChatList	= function(_htmlTarget){};
	this.drawMessageList= function(){
		var divChat = document.getElementById('chat');
		divChat.innerHTML = '';

		for (var i in this.selectedChat.messages) {
			if (object.hasOwnProperty(i)) {
				console.log(this.selectedChat.messages[i]);
				this.sendMessage(this.selectedChat.messages[i], false);
			}
		}
	};
	this.getLastMessage = function(){
		return this.selectedChat.messages[this.selectedChat.messages.length-1];
	};
	this.sendMessage	= function(_message, _in){
		var htmlMessageIn = '<div class="w-message w-message-in"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">14:27</div></div></div>';
		var htmlMessageOut = '<div class="w-message w-message-out"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">14:27</div></div></div>';
		var divChat = document.getElementById('chat');

		this.selectedChat.messages.push(_message);

		if(_in)
		{
			divChat.innerHTML += htmlMessageIn;
		}else{
			divChat.innerHTML += htmlMessageOut;
		}

		divChat.scrollTop = divChat.scrollHeight;
	};
}

var wapp = new Whatsapp();

var me = new Person('Gerson');
var zare = new Person('Zare');

var chat = new Chat();

chat.people.push(zare);

wapp.chats.push(chat);
wapp.selectedChat = chat;

wapp.sendMessage(new Message('Hola', zare));
wapp.sendMessage(new Message('Que tal?', me));

console.log(wapp.getLastMessage().sender);

window.onload = init;

var inputMessage;
var divChat;
var chatPanel;

function init()
{
	inputMessage = document.getElementById('mensajes');
	divChat = document.getElementById('chat');
	//chatPanel = document.querySelector('.w-chat-panel');

	inputMessage.addEventListener('keyup', onInputKeyUp);
}

function onInputKeyUp(evt)
{
	console.log(evt.keyCode); 
	if(evt.keyCode == 13)
	{
		wapp.sendMessage(new Message(evt.target.value, me));
		evt.target.value = '';
	}
*/}

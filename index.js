// limit contacts
var contactCount  = 5;

// most often needed elements
var mainElement   = document.querySelector('main');
var headerElement = document.querySelector('#app > header');
var contactsElement = document.querySelector('#contacts');
var chatElement     = document.querySelector('#chat');

// store chats
/*

should have the following structure:

[
  'username-1': {
    msgs: [
      {time: 28712317, me: false, content: 'skjdh askgskd asjkdhdf.'},
      {time: 28712317, me: false, content: 'skjdh askgskd asjkdhdf.'},
      {time: 28712317, me: false, content: 'skjdh askgskd asjkdhdf.'},
    ]
  },
  'username-2': {
    msgs: [
      {time: 28712317, me: false, content: 'skjdh askgskd asjkdhdf.'},
      {time: 28712317, me: false, content: 'skjdh askgskd asjkdhdf.'},
      {time: 28712317, me: false, content: 'skjdh askgskd asjkdhdf.'},
    ]
  }
]

*/
var myChats       = [];


/**************************************\
\**************************************/


// click handler to move to contacts
function toContacts(e) {

}

// click handler to move to chat
function toChat(e) {

}

// click handler to move to a specific chat
function toSpecificChat(e, f) {

}


/**************************************\
\**************************************/


// register a new contact
function registerContact(JSONData) {

}

// register a new message for given chat (username)
function registerMsg(object, username, me = false) {

}


/**************************************\
\**************************************/


// render a contact
function renderContact(object) {

}

// render a chat thread
function renderChat(username) {

}

// renders a chat thread for given username
function renderContactNewMessage(username) {

}


/**************************************\
\**************************************/


// loads JSON and call callback
function loadJSON(url, callback, param) {

}

// load actually one contact
function loadContact() {
  loadJSON('https://randomuser.me/api/', registerContact);
}

// load as many contacts as defined via var contactCount
function loadRandomContacts() {

}

// load a random message to a random picked chat
function loadRandomMsg() {
  var rand = Math.random();

  if(rand < 0.25) {
    var keys = Object.keys(myChats);
    var randUsername = keys[Math.floor(keys.length * Math.random())];
    loadJSON('http://www.randomtext.me/api/gibberish/p-1/1-15', registerMsg, randUsername);
  }
}


/**************************************\
\**************************************/


// apply header click handlers

// load random contacts
loadRandomContacts();

// load random chat message once in a while
var chatInterval = setInterval(loadRandomMsg, 3000);

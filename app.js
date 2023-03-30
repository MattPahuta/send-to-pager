// Send to Pager

// Global variables
const pagerContent = document.getElementById('pager-content');
const phoneContent = document.getElementById('phone-content');
const phone = document.getElementById('phone');
const keypad = document.getElementById('keypad');
pagerContent.textContent = '';
phoneContent.textContent = '';

phone.addEventListener('click', (e) => {
  // target keypad buttons
  if (e.target.className === 'btn keypad-btn') {
    console.log(e.target.textContent)
    composePage(e.target.textContent)
  }
  // target reset button
  if (e.target.id === 'reset-btn') {
    console.log('resetting display')
    clearPhoneScreen()
  }
  // target send button
  if (e.target.id === 'send-btn') {
    console.log('sending pager...')
    sendPage()
  }

})



function composePage(key) {
  phoneContent.textContent += key;
}

function sendPage() {
  pagerContent.textContent = phoneContent.textContent;
}

function clearPhoneScreen() {
  phoneContent.textContent = '';
}
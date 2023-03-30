// Send to Pager

const pagerContent = document.getElementById('pager-content');
const phoneContent = document.getElementById('phone-content');
const phone = document.getElementById('phone');
pagerContent.textContent = '';
phoneContent.textContent = '';

phone.addEventListener('click', (e) => {
  // target keypad buttons
  if (e.target.className === 'btn keypad-btn' && phoneContent.textContent.length < 15) {
    composePage(e.target.textContent)
  }
  // target reset button
  if (e.target.id === 'reset-btn') {
    phoneContent.textContent = '';
  }
  // target send button
  if (e.target.id === 'send-btn') {
    sendPage()
  }
})

// compose page content
function composePage(key) {
  phoneContent.textContent += key;
}

// send page
function sendPage() {
  const audio = new Audio('./assets/pager.wav');
  setTimeout(() => {
    audio.play();
    pagerContent.textContent = phoneContent.textContent;
  }, 1500)
}


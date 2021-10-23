function notify(message) {
      const notificationDiv = document.getElementById('notification');
      notificationDiv.textContent = message;
      notificationDiv.style.display = 'block';

      notificationDiv.addEventListener('click',() => {
            notificationDiv.style.display = 'none'
      });
}
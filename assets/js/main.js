const readAll = document.querySelector('[data-button="readAll"]')
const notifications = document.querySelectorAll('li.notification')

readAll.addEventListener('click', () => {
    notifications.forEach(notification => {
        const mark = document.querySelector('.new-post-mark')
        mark.parentElement.removeChild(mark)
        notification.classList.remove('unread')
    })
})
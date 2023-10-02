const btnReadAll = document.querySelector('[data-button="readAll"]')
const notifications = document.querySelectorAll('li.notification')
const notificationNumber = document.querySelector('.unread-qnt')
const marks = document.querySelectorAll('.new-post-mark')

newNotificationsQnt()

btnReadAll.addEventListener('click', () => {
    notifications.forEach(notification => {
        notification.classList.remove('unread')
    })
    marks.forEach(mark => {
        mark.style.display = "none"
    })
    newNotificationsQnt()
})

function newNotificationsQnt() {
    const unreadNotifications = document.querySelectorAll('li.notification.unread')
    notificationNumber.innerText = unreadNotifications.length
}

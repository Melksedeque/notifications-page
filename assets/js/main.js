const btnReadAll = document.querySelector('[data-button="readAll"]')
const notifications = document.querySelectorAll('li.notification')
const unreadNotifications = document.querySelectorAll('li.notification.unread')
const notificationNumber = document.querySelector('.unread-qnt')

newNotificationsQnt()

btnReadAll.addEventListener('click', () => {
    notifications.forEach(notification => {
        const mark = document.querySelector('.new-post-mark')
        mark.parentElement.removeChild(mark)
        notification.classList.remove('unread')
    })
    newNotificationsQnt()
})


function newNotificationsQnt() {
    notificationNumber.innerText = unreadNotifications.length
}

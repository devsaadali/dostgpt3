export const alert_box = (message, error) => {
    let html = `<div class="alertBox ${error}">
            <p class="alertBox-Error">${message}</p>
            <span class="alertBoxCloseBtn" onclick="this.parentElement.style.display='none';">&times;</span>
        </div>`

    return html
}
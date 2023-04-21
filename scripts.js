function activateMessages(i) {
    const messages = document.querySelectorAll('.message');

    messages[i].className += " active";

    if (i == messages.length -1) {
        return;
    }

    setTimeout(function () {
        activateMessages(i + 1);
    }, 500);
}

activateMessages(0);
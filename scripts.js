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

console.log(" _____                  _    _                                       _      _           _    ___  ");
console.log("/  ___|                | |  (_)                                     | |    | |         | |  |__ \\ ");
console.log("\\ `--. _ __   ___  __ _| | ___ _ __   __ _    __ _   _ __   ___  ___| | __ | |__  _   _| |__   ) |");
console.log(" `--. \\ '_ \\ / _ \\/ _` | |/ / | '_ \\ / _` |  / _` | | '_ \\ / _ \\/ _ \\ |/ / | '_ \\| | | | '_ \\ / / ");
console.log("/\\__/ / | | |  __/ (_| |   <| | | | | (_| | | (_| | | |_) |  __/  __/   <  | | | | |_| | | | |_|  ");
console.log("\\____/|_| |_|\\___|\\__,_|_|\\_\\_|_| |_|\\__, |  \\__,_| | .__/ \\___|\\___|_|\\_\\ |_| |_|\\__,_|_| |_|(_)  ");
console.log("                                      __/ |         | |                                             ");
console.log("                                     |___/          |_|                                             ");

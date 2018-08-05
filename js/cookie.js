const MS_PER_DAY = 1000 * 60 * 60 * 24;

function saveCookie(title, data, path = "/", days = 30) {
	let date = new Date();
	date.setTime(date.getTime() + (days * MS_PER_DAY));
	let dataString = "data=" + data + ";";
	let expirationString = "expires=" + date.toUTCString() + ";";
	let pathString = title.trim() + "=" + path;
	document.cookie = dataString + expirationString + pathString;
}

function loadCookie(title, path = "/") {
	let cookie = decodeURIComponent(document.cookie);
	let vars = cookie.split(';');
	for (let i = 0; i < vars.length; i++) {
		let parts = vars[i].split('=');
		if (parts[0] === title.trim()) {
			return parts[1];
		}
	}
	return undefined;
}

function eraseCookie(title, path = "/") {
	saveCookie(title, "", path, -1);
}

function cookieExists(title, path = "/") {
	return loadCookie(title, path) !== undefined;
}
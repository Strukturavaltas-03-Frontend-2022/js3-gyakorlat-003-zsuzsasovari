const setCookie = (value) => {
    let now = new Date(Date.now() + (15 * 60 * 1000));
    let expires = now.toUTCString();
    document.cookie =`token=${value};expires=${expires}`;
}

export default setCookie;
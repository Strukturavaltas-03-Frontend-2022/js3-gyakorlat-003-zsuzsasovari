const cookieHandler ={
    getAll() {
        let result = {};
        let keyValuePairs = document.cookie.split('; ')
        //return keyValuePairs ? keyValuePairs.split('=')[1] : '';
        keyValuePairs.forEach(kvp => {
            let splitted = kvp.split('=');
            result[splitted[0]] = splitted[1];
        });
        return result;
    },
    toSessionStorage(cookies) {
        let result = this.getAll();
        Object.entries(result).forEach(([key, value]) => {
        sessionStorage.setItem(key, value);
        });
    },
    flush() {
        let result = this.getAll();
        Object.keys(result).forEach ((key) => {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    });
    }
}

export {
    cookieHandler,
};
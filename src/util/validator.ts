const fnameRegex=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
const lnameRegex=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
const usernameRegex=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


export function validatefname(fname: string): boolean {
    return fnameRegex.test(fname)
}
export function validatelname(lname: string): boolean {
    return lnameRegex.test(lname)
}
export function validateUsername(username: string): boolean {
    return usernameRegex.test(username)
}

export function validateEmail(email: string): boolean {
    return emailRegex.test(email)
}

export function validatePassword(password: string): boolean {
    return passwordReg.test(password)
}
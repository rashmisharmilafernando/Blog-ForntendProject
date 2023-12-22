const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export function validateEmail(email: string): boolean {
    return emailRegex.test(email)
}

export function validatePassword(password: string): boolean {
    return passwordReg.test(password)
}
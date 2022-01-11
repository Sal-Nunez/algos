

// Minimum eight characters, at least one letter and one number:

const regex1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
// Minimum eight characters, at least one letter, one number and one special character:

const regex2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

const regex3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

const regex4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

const regex5 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/

const password1 = "alllowercase"

console.log(regex1.test(password1))
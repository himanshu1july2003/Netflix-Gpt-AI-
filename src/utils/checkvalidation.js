export const checkvalidation=(name,email,password)=>{
    const mail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const Password=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)


    // if(!Name) return ("Name is not valid")
    if(!mail) return ("Email is not valid !!")
    if(!Password) return ("Password is not valid(At least one uppercase letter,one lowercase letter,one digit,one special character &Minimum 8 characters,)")
    return null
}
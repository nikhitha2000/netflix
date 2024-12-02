export const checkValidateData = (name,email,password)=>{
const isnameValid = name ? /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(name) : true;
const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const ispasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
if(!isnameValid) return "Name is not a valid"
if(!isEmailValid) return "Email ID is not valid";
if(!ispasswordvalid) return "Password is not valid";

return null;
}


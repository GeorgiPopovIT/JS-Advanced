export function setUserData(data){
    sessionStorage.setItem('userData',JSON.stringify(data));
}

export function getUserData(data){
   return sessionStorage.getItem('userData');
}

export function clearUserData(data){
     return sessionStorage.removeItem('userData');
}
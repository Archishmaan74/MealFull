import { CanActivateFn } from '@angular/router';

export const mealfullGuard: CanActivateFn = (route, state) => {
  let uname = prompt("Enter username:")
  if(uname == "Archishmaan"){
    let pass = prompt("Enter password:")
    if(pass == "12345"){
      return true
    }
  }
  return false
};

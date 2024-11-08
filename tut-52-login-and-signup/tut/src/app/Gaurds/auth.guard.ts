import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const logginUser = localStorage.getItem("user");
  if (logginUser) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};

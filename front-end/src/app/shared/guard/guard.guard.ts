import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const guardGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot) => {

  const service = inject(AuthService);
  const router: Router = inject(Router);
  const toastr = inject(ToastrService);

  if (service.isLogged()) {
    if (route.url.length > 0) {
      let menu = route.url[0].path;
      if (menu == 'userlist') {
        if (service.GetRole() == 'admin') {
          return true;
        } else {
          router.navigate(['']);
            toastr.warning('Usuário não possui acesso.')
          return false;
        }
      }else{
        return true;
      }
    } else {
      return true;
    }
} else {
  router.navigate(['login']);
  return false;
  }
};


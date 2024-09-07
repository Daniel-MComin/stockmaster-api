import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot) => {

  const service = inject(AuthService);
  const router: Router = inject(Router);
  const toastr = inject(ToastrService);

    if (service.getSuperUserStatus()) {
      return true;
    } else {
      toastr.error('Apenas Administradores possuem acesso!', 'Acesso Negado')
      router.navigate(['/userhome']);
      return false;
    }
};


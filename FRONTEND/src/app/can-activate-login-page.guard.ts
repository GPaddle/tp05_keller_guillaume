import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from './account/states/account-state';

@Injectable({
  providedIn: 'root'
})
export class CanActivateLoginPageGuard implements CanActivate {
  constructor(private router: Router, private store: Store) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = this.store.selectSnapshot(AccountState.getAccount);

    if (isAuthenticated) {
      this.router.navigate(['/account'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    return true;
  }
  
}

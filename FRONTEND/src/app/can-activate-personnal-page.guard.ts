import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from './account/states/account-state';
import { People } from './form/people';

@Injectable({
  providedIn: 'root'
})
export class CanActivatePersonnalPageGuard implements CanActivate {

  @Select(AccountState.getAccount) people$: Observable<People>;

  constructor(private router: Router, private store: Store) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = this.store.selectSnapshot(AccountState.getAccount);

    if (!isAuthenticated) {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    return true;
  }

}

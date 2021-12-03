import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

	jwtToken: String = "";

	constructor(private router: Router) { }

	intercept(req: HttpRequest<any>, next: HttpHandler):
		Observable<HttpEvent<any>> {

		return next.handle(req).pipe(tap((evt: HttpEvent<any>) => {
			if (evt instanceof HttpResponse) {
				let tab: Array<String>;
				let enteteAuthorization = evt.headers.get("Authorization");
				if (enteteAuthorization != null) {
					tab = enteteAuthorization.split(/Bearer\s+(.*)$/i);
					if (tab.length > 1) {
						this.jwtToken = tab[1];
					}
				}
			}
			if (this.jwtToken != "") {
				req = req.clone({
					setHeaders: {
						Authorization: `Bearer
					${this.jwtToken}`
					}
				});
			}
		},
			(error: HttpErrorResponse) => {
				switch (error.status) {
					case 400:
					case 401:
						this.router.navigate(["/"]);
				}
				return of(null);
			}
		));
	}
}

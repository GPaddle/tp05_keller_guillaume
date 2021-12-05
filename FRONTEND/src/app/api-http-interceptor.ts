import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { filter, tap } from "rxjs/operators";

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

	JWTToken: String = "";

	constructor(private router: Router) { }

	intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if (this.JWTToken != "") {
			httpRequest = httpRequest.clone(
				{
					setHeaders: {
						Authorization: `Bearer ${this.JWTToken}`
					}
				}
			);
		}

		return next.handle(httpRequest).pipe(
			filter(e => e.type !== 0),
			tap(
				(event: HttpEvent<any>) => {
					console.log('[API]: response ', event);

					if (event instanceof HttpResponse) {

						let authorizationHeader = event.headers.get("Authorization");

						if (authorizationHeader != null) {
							let tab: Array<String> = authorizationHeader.split(/Bearer\s+(.*)$/i);
							if (tab.length > 1) {
								this.JWTToken = tab[1];

								console.log("new JWT Token ! " + this.JWTToken)
							}
						}
					}
				},
				(error: HttpErrorResponse) => {
					switch (error.status) {
						case 400:
							console.error(error.message);
							break;
						case 401:
							alert(error.error.data.message);
							break;
						// this.router.navigate(["/"]);
					}
					return of(null);
				}
			)
		);
	}
}

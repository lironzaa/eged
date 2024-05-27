import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

import { environment } from "../../../../environments/environment";

@Injectable()
export class CustomHeaderInterceptor implements HttpInterceptor {
  baseApiUrl = environment.baseApiUrl;

  constructor(private toastr: ToastrService) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.url.includes(this.baseApiUrl)) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;

      const modifiedReq = req.clone({
        setHeaders: {
          "Custom-Header": randomNumber.toString()
        }
      });

      if (randomNumber > 15) this.toastr.error("Random custom header number is above 15");

      return next.handle(modifiedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
    }
    return next.handle(req);
  }
}

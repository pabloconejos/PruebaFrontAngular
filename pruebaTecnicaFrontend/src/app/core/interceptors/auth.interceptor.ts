import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloneReq = req;
    cloneReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${environment.accesTokenAuth}`
      }
    });
    

    return next.handle(cloneReq);
  }
}

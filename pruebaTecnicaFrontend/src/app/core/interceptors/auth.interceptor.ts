import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      'Authorization': `Bearer ${environment.accesTokenAuth}`
    }
  });

  return next(clonedRequest);
};

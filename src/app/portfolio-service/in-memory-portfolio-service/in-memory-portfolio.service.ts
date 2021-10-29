import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPortfolioService } from '../iportfolio-service.service';

@Injectable()
export class InMemoryPortfolioService extends IPortfolioService {
    get bannerImage(): Observable<string> {
        return of( 'I AM TEST STRING' );
    }
}

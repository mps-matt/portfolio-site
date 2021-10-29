import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPortfolioService } from 'src/app/Interfaces/iportfolio-service';

@Injectable( {
    providedIn: 'root'
} )
export class InMemoryPortfolioServiceService implements IPortfolioService {
    get bannerImage(): Observable<string> {
        return of( 'I AM TEST STRING' );
    }
}

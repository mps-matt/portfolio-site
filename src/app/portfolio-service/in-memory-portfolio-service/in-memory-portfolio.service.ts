import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPortfolioService } from '../iportfolio-service';

@Injectable()
export class InMemoryPortfolioService extends IPortfolioService {
    get bannerImage(): Observable<string> {
        return of( 'https://lh3.googleusercontent.com/qwHXqF8VeG-9H4wAzfKJEefuonmgqs7l6PEOugnxrx_-fLLmCNe5urhop3hsQh0X0rhb8qEfTVelxn6TIAxGDqb4TpPkrFfxkD3RQvw1XHWs6iep8li_TnfPIBnJHlPrYPrQ05jKqQ=w2400' );
    }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPortfolioService } from '../iportfolio-service';

@Injectable()
export class InMemoryPortfolioService extends IPortfolioService {
    get bannerImage(): Observable<string> {
        return of( 'https://lh3.googleusercontent.com/qwHXqF8VeG-9H4wAzfKJEefuonmgqs7l6PEOugnxrx_-fLLmCNe5urhop3hsQh0X0rhb8qEfTVelxn6TIAxGDqb4TpPkrFfxkD3RQvw1XHWs6iep8li_TnfPIBnJHlPrYPrQ05jKqQ=w2400' );
    }

    get profilePicture(): Observable<string> {
        return of( 'https://media-exp1.licdn.com/dms/image/C4D03AQHeZLymqaOgHA/profile-displayphoto-shrink_400_400/0/1562402618930?e=1640822400&v=beta&t=tEwdryrvhQPo1UOXSNZuluYC5KmHW0zHDJPAq5lR8zc' );
    }

    get fullName(): Observable<string> {
        return of( 'Matthew P Stark' );
    }

    get pronouns(): Observable<string> {
        return of( 'He/Him' );
    }

    get smallDescription(): Observable<string> {
        return of( 'Software Engineer at Microlise.' );
    }

    get linkedInUrl(): Observable<string> {
        return of( 'https://www.linkedin.com/in/matthewpstark' );
    }
}

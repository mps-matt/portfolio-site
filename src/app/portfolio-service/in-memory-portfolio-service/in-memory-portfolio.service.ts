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

    get email(): Observable<string> {
        return of( 'mps.main+career@protonmail.com' );
    }

    get phone(): Observable<string> {
        return of( '07580090555' );
    }

    get githubName(): Observable<string> {
        return of( 'mps' );
    }

    get githubUrl(): Observable<string> {
        return of( 'http://www.github.com' );
    }

    get googleMapsUrl(): Observable<string> {
        return of( 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152259.93722379298!2d-1.6395376627542657!3d53.395839406061235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield!5e0!3m2!1sen!2suk!4v1637079502151!5m2!1sen!2suk' );
    }
}

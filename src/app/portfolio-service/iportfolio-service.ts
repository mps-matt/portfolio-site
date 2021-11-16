import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class IPortfolioService {
    abstract bannerImage: Observable<string>;
    abstract profilePicture: Observable<string>;
    abstract fullName: Observable<string>;
    abstract pronouns: Observable<string>;
    abstract smallDescription: Observable<string>;
    abstract linkedInUrl: Observable<string>;
    abstract email: Observable<string>;
    abstract phone: Observable<string>;
    abstract githubName: Observable<string>;
    abstract githubUrl: Observable<string>;
    abstract googleMapsUrl: Observable<string>;
}

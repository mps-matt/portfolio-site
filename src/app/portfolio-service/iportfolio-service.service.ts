import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class IPortfolioService {
    abstract bannerImage: Observable<string>;
}

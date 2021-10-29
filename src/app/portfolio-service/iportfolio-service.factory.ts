import { IPortfolioService } from './iportfolio-service.service';
import { InMemoryPortfolioService } from './in-memory-portfolio-service/in-memory-portfolio.service';

const PortfolioServiceFactory = (): IPortfolioService => {
    return new InMemoryPortfolioService();
};

export { PortfolioServiceFactory };

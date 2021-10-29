import { IPortfolioService } from './iportfolio-service.service';
import { InMemoryPortfolioServiceService } from './in-memory-portfolio-service/in-memory-portfolio-service.service';

const PortfolioServiceFactory = (): IPortfolioService => {
    return new InMemoryPortfolioServiceService();
};

export { PortfolioServiceFactory };

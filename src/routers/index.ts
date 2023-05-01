import router, { Request, Response, NextFunction } from 'express';

import ProductRouter from './product.router';

const apiRouter = router();

apiRouter.use('/product', ProductRouter);

apiRouter.all('*', (request: Request, response: Response, errorHandler: NextFunction) => {
    errorHandler(new Error('Page not found'));
});

export default apiRouter;
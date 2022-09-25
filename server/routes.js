import authRouter from './api/controllers/auth/routes';
import userRouter from './api/controllers/user/routes';
import chefRouter from './api/controllers/chef/routes';

export default function routes(app) {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/chef', chefRouter);
}

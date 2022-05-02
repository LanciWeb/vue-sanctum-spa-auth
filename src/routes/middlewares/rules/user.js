import { isLogged } from '@/store/auth';


// se sei loggato puoi passare, altrimenti login
export default (to, from, next) => {
  if (isLogged()) next();
  else next({ name: 'login' });
}
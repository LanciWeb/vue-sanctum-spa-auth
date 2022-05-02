import { isLogged } from '@/store/auth';


// se sei loggato, non puoi vederla, vai in home
export default (to, from, next) => {
  if (isLogged()) next({ name: 'home' });
  else next();
}
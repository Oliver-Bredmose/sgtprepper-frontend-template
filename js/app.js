import { LoginPage } from './controllers/loginController.js';
import { productPage } from './controllers/productController.js';
import { router } from './router/index.js';

router({
  '/': () => productPage(), // Forside
  '/login': () => LoginPage(), // Forside
}, '#app'); 
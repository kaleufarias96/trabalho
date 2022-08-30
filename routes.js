import { Router, json } from 'express';
const router = Router();

router.use(json());

import {carroDelete, carroIndex, carroShow, carroStore, carroUpdate} from "./controllers/carroController.js";

// Define as rotas relacionadas ao cadasro de carros
router.get('/carros', carroIndex)
      .get('/carros/:id', carroShow)
      .post('/carros', carroStore)
      .put('/carros/:id', carroUpdate)
      .delete('/carros/:id' , carroDelete)
      

export default router;
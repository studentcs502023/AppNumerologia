import { Router } from 'express';
import { obtenerTodasLasLoterias, generarNumeroSuerte } from '../helpers/loteria.js';
import { validarJWT } from '../helpers/validar-JWT.js';
import { esPremium } from '../middlewares/pagos.js';

const router = Router();

router.get('/todas', [validarJWT, esPremium], async (req, res) => {
    try {
        const resultados = await obtenerTodasLasLoterias();
        res.json({ success: true, data: resultados });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Error al obtener las loterías' });
    }
});

router.get('/suerte', [validarJWT], (req, res) => {
    try {
        const resultado = generarNumeroSuerte();
        res.json({ success: true, data: resultado });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Error al generar número de la suerte' });
    }
});

export default router;

// import express from 'express';
// import { CommonRoutesConfig } from './common.routes.config';
// import veterinaryController from '../controllers/veterinary.controller';
// import veterinaryMiddleware from '../middlewares/veterinary.middleware';
// import { body } from 'express-validator';
// import bodyValidationMiddleware from '../middlewares/body.validation.middleware';

// export class VeterinaryRoutes extends CommonRoutesConfig {
//   constructor(app: express.Application) {
//     super(app, 'VeterinaryRoutes');
//   }

//   configureRoutes(): express.Application {
//     this.app
//       .route('/api/veterinaries')
//       .get(veterinaryController.readAll)
//       .post(
//         body('dni').isString(),
//         body('firstname').isString(),
//         body('lastname').isString(),
//         body('phone').isString().optional(),
//         bodyValidationMiddleware.verifyBodyFieldsErrors,
//         veterinaryController.create,
//       )
//       .delete(veterinaryController.deleteAll);

//     this.app
//       .route('/api/veterinaries/:id')
//       .all(veterinaryMiddleware.validateVeterinaryExistsByParams)
//       .get(veterinaryController.read)
//       .put(
//         body('dni').isString(),
//         body('firstname').isString(),
//         body('lastname').isString(),
//         body('phone').isString(),
//         bodyValidationMiddleware.verifyBodyFieldsErrors,
//         veterinaryController.update,
//       )
//       .patch(
//         body('dni').isString().optional(),
//         body('firstname').isString().optional(),
//         body('lastname').isString().optional(),
//         body('phone').isString().optional(),
//         bodyValidationMiddleware.verifyBodyFieldsErrors,
//         veterinaryController.update,
//       )
//       .delete(veterinaryController.delete);

//     return this.app;
//   }
// }

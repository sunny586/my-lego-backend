// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCustomError from '../../../app/middleware/customError';
import ExportJwt222 from '../../../app/middleware/jwt222';
import ExportMyLogger from '../../../app/middleware/myLogger';

declare module 'egg' {
  interface IMiddleware {
    customError: typeof ExportCustomError;
    jwt222: typeof ExportJwt222;
    myLogger: typeof ExportMyLogger;
  }
}

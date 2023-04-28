import { Request, Response, NextFunction } from 'express';
export const authAPIKey = (req: Request, res: Response, next: NextFunction) => {
    const originKey = 'aGVsbG9jb21lcGFzczIwMjM=';
    const authKey = req.header('x-comepass-key');
    if (authKey === originKey) return next();
}

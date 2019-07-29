import { Request, Response, NextFunction } from 'express';
import { logC, colors } from '@Tools/console-colors';


export function TestMiddlewareFactory ( config: {role: string}){


    return (req: Request, res: Response, next: NextFunction) => {

        logC(colors.FgRed, config.role);
    
        next();
    }

}



import { BaseMiddleware } from "inversify-express-utils";
import { Request, Response, NextFunction } from "express";
import { injectable } from "inversify";
import { colors, logC } from "@Tools/console-colors";

@injectable()
export class TestMiddleware extends BaseMiddleware{

    handler(req: Request, res: Response, next: NextFunction): void {
        logC(colors.FgRed ,"TEST MiddleWare");
        next();
    }

}
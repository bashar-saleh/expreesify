
import "reflect-metadata"
import "module-alias/register";
import { binding } from './inversify.config';
import { Container } from "inversify";
import {InversifyExpressServer} from "inversify-express-utils";
import { logC, colors } from '@Tools/console-colors';
import morgan from "morgan";

(async () => {
    
    const container = new Container();
    await container.loadAsync(binding);

    const server = 
        new InversifyExpressServer(container)
        .setConfig( app => {
            app.use(morgan("tiny"));
        })
        .build()
        .listen(3000, () => logC( colors.FgCyan ,`Server is Up and running on 3000 ...`));

})()
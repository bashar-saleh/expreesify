import { logC, colors } from '@Tools/console-colors';
import { createConnection } from "typeorm";
import * as path from "path"


export async function getDBConnection () {

    const con = await createConnection({
        type: "sqlite",
        database: path.join(__dirname,"../ex.db"),
        entities:[
            path.join(__dirname,"/entities/*.ts")
        ],
        synchronize: true,
        logging:true    
    });

    logC(colors.FgCyan, "DB Connected ...")
    return con;




}
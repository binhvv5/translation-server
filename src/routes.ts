import {Express, Request, Response} from "express";
import {validateRequest} from "./middleware";
import {translateHandler} from "./controller/translate.controller";
import {translateSchema} from "./schema/translate.shema";

export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
    app.post("/api/translate",
        // [authenticateToken, validateRequest(translateSchema)]
        validateRequest(translateSchema)
        , translateHandler);
}

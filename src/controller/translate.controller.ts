import { Request, Response } from "express";
import log from "../logger";
import {translateText} from "../service/translate.service";
import {TranslateModelResponse} from "../model/translate.model";
import {createResponseData} from "../model/response.model";

export async function translateHandler(req: Request, res: Response) {
    try {
        const result = await translateText(req.body) as TranslateModelResponse;
        return res.status(200).send(createResponseData("000000","",{text: result.text}));
    } catch (e) {
        log.error(e);
        return res.status(409).send(e.message);
    }
}

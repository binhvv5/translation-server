import {getDateTimeNow} from "../utils/date.utils";

export interface ResponseModel{
    responseCd: string;
    responseMsg: string;
    responseTs: string;
    data: {}
}

export const createResponseData = (responseCd: string, responseMsg: string, data: {}): ResponseModel => {
    return {
        responseCd,
        responseMsg,
        responseTs: getDateTimeNow(),
        data,
    };
}


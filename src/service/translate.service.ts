import { translate } from '@vitalets/google-translate-api';
import {TranslateModelRequest, TranslateModelResponse} from "../model/translate.model";

export const translateText = async (object: TranslateModelRequest) => {
    const { text, raw } = await translate(object.text, object.options);
    return {text: text, raw: raw};
}

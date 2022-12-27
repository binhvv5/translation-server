import {RequestInit} from "node-fetch";

export interface TranslateModelResponse{
    text: string;
    raw?: {
        sentences: [];
        src: string;
        confidence: number;
        spell: {};
        ld_result: {
            srclangs:[];
            srclangs_confidences:[];
            extended_srclangs:[]
        }
    };
}

export interface TranslateModelRequest{
    text: string;
    options?: {
        from?: string;
        to?: string;
        host?: string;
        fetchOptions?: Partial<RequestInit>;
    }
}

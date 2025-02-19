import { ResponseStatus } from "../enums/response-status";
import { Pagination } from "./pagination";


export type CodeAndResponse = {
    code: ResponseStatus,
    response : {
        messages?: string[],
        pagination?: Pagination,
        data?: any
    }
}
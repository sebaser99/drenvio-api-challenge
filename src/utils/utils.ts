import { Messages } from "./enums/messages";
import { ResponseStatus } from "./enums/response-status";
import { CodeAndResponse } from "./types/code-and-response";

class Utils {
    getResponseError(
        status: ResponseStatus = ResponseStatus.INTERNAL_SERVER_ERROR,
        messageCode: Messages = Messages.UNEXPECTED_ERROR
    ) : CodeAndResponse {
        return {
            code: status,
            response: {
                messages: [messageCode],
                data: null
            }
        };
    }
}

const utils = new Utils();

export default utils;
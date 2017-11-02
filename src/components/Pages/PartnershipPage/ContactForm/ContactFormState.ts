import {SubmitStatus} from "./SubmitStatus";

export interface ContactFormState {
    status: SubmitStatus,
    data?: {
        name: string,
        from: string,
        to: string
    }
}

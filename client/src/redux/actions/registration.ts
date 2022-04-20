import { IUser } from "../../models/IUser"
import { AsyncRegistrationAction, RegistrationAction, RegistrationActions } from "../../models/redux/Registration"

export const registrationAction = (payload: IUser): RegistrationAction => {
    return { type: RegistrationActions.REGISTRATION, payload}
}

export const asyncRegistrationAction = (payload: any): AsyncRegistrationAction => {
    return { type: RegistrationActions.ASYNC_REGISTRATION, payload}
}
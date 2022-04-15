import { IUser } from "../../models/IUser"
import { RegistrationAction, RegistrationActionTypes } from "../../models/redux-types/actions"

export const registrationAction = (payload: IUser): RegistrationAction => {
    return { type: RegistrationActionTypes.REGISTRATION, payload}
}

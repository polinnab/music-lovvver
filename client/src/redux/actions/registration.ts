import { IUser } from "../../models/IUser"
import { RegistrationAction, RegistrationActionTypes } from "../../models/redux/Registration"

export const registrationAction = (payload: IUser): RegistrationAction => {
    return { type: RegistrationActionTypes.REGISTRATION, payload}
}

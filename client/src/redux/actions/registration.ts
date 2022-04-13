export const RegistrationActions = {
    REGISTRATION: "REGISTRATION"
}

export const registrationAction = (payload: any) => {
    return { type: RegistrationActions.REGISTRATION, payload }
}

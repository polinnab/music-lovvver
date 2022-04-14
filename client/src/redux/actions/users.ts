export enum UsersActions {
    GET_USERS = "GET_USERS"
}

export const getUsersAction = (payload: any) => {
    return { type: UsersActions.GET_USERS, payload }
}

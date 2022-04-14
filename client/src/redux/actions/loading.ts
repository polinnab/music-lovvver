export const LoadingActions = {
    AUTH_LOADING: "AUTH_LOADING"
}

export const loadingUsersAction = (payload: any) => {
    return {type: LoadingActions.AUTH_LOADING, payload }
}
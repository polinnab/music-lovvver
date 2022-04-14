export const getUniqueData = <T>(newData: T[], oldData: Array<T>, key: keyof T): Array<T> => {
    return newData.filter((itemNew) => !oldData.find((itemOld) => itemOld[key] === itemNew[key]) && itemNew)
}

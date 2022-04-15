import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/redusers/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
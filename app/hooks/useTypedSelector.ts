import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TypeRotState} from "@/store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRotState> =
    useSelector
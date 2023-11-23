import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch,RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>(); //!this is to dispatch an action to change the global state
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;  //!this is to select a part of global state that we need to suscribe ;
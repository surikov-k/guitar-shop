import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AppDispatch,
  CommentType,
  JwtDecodeType,
  OrderType,
  RegisterData,
  ShopItemType,
  State,
  UserData
} from '../types';
import { AxiosInstance } from 'axios';
import { loadItemComments, loadOrders, loadShopItems, requireAuthorization, saveUser, setError } from './actions';
import { ApiRoute, AuthStatus, SHOW_ERROR_TIMEOUT } from '../constants';
import { adaptShopItem } from '../utils/utils';
import { store } from './';
import { saveToken } from '../services';
import { AuthData } from '../types/auth-data';
import { Comment, User } from '@guitar-shop/shared-types';
import jwtDecode from 'jwt-decode'


export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), SHOW_ERROR_TIMEOUT);
  }
);

export const fetchShopItemsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchShopItems',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<ShopItemType[]>(ApiRoute.ShopItems);
    dispatch(loadShopItems(data.map((item) => adaptShopItem(item))));
  }
)

export const fetchCommentsAction = createAsyncThunk<void, ShopItemType['id'], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api
      .get<CommentType[]>(ApiRoute.ItemComments.replace(':id', String(id)))
    dispatch(loadItemComments(data))
  }
)

export const postCommentAction = createAsyncThunk<void, Comment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postComment',
  async (comment: Comment, { dispatch, extra: api }) => {
    const { shopItemId } = comment
    const { data } = await api
      .post(ApiRoute.ItemComments.replace(':id', String(shopItemId)));
    dispatch(postCommentAction(data))
  }
)

export const fetchOrders = createAsyncThunk<void, OrderType['id'], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOrders',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api
      .get<OrderType[]>(ApiRoute.Orders);
    dispatch(loadOrders(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {

    try {
      const { data } = await api.get(ApiRoute.Auth);
      if (data.isAdmin) {
        dispatch(requireAuthorization(AuthStatus.Admin));
      } else {
        dispatch(requireAuthorization(AuthStatus.Auth))
      }
      dispatch(saveUser(data));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NoAuth))
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { accessToken } } = await api.post<UserData>(ApiRoute.Login, { email, password })
    const payload  = jwtDecode(accessToken) as JwtDecodeType
    const user: User = {...payload, id: payload.sub}

    saveToken(accessToken);
    if (user.isAdmin) {
      dispatch(requireAuthorization(AuthStatus.Admin))
    } else {
      dispatch(requireAuthorization(AuthStatus.Auth))
    }
    dispatch(saveUser(user));
  }
)

export const registerAction = createAsyncThunk<void, RegisterData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/register',
  async (registerData, { dispatch, extra: api }) => {
    const { data }  = await api.post<string>(ApiRoute.Register, registerData);
    const payload = jwtDecode(data) as JwtDecodeType
    const user: User = {...payload, id: payload.sub}

    saveToken(data);
    if (user.isAdmin) {
      dispatch(requireAuthorization(AuthStatus.Admin))
    } else {
      dispatch(requireAuthorization(AuthStatus.Auth))
    }
    dispatch(saveUser(user));
  }
)


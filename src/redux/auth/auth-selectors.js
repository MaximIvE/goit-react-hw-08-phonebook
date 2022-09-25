export const getAuthError = ({auth}) => auth.error || {visible: 1};
export const getAuthisLogin = ({auth}) => auth.isLogin;
export const getAuthUser = ({auth}) => auth.user;
export const getAuthToken = ({auth}) => auth.token;
export const getAuthLoading = ({auth}) => auth.loading;

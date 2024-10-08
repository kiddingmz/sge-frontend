/* eslint-disable */
export default {
  state: {
    token: null,
    user: null,
    isLoggingIn: false,
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      console.log("Token atualizado:", token);
    },

    SET_USER(state, user) {
      state.user = user;
      console.log("Usuário atualizado:", user);
    },

    SET_LOGGING_IN(state, isLoggingIn) {
      state.isLoggingIn = isLoggingIn;
      console.log("Status de login:", isLoggingIn);
    },

    LOGOUT(state) {
      state.token = null;
      state.user = null;
      state.isLoggingIn = false;
      console.log("Logout realizado, estado redefinido.");
    }
  },

  actions: {
    login({ commit }, { email, password }) {
      commit('SET_LOGGING_IN', true);
    },

    logout({ commit }) {
      commit('LOGOUT');
    }
  },

  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },

    user(state) {
      return state.user;
    },

    isLoggingIn(state) {
      return state.isLoggingIn;
    }
  }
};

/* eslint-disable */
import { baseApiUrl } from "@/global";
import axios from "axios";
axios.defaults.baseURL = baseApiUrl;

export default {
  state: {
    token: sessionStorage.getItem('access_token') || null,
    user: JSON.parse(sessionStorage.getItem('user')) || null,
    authorities: sessionStorage.getItem('authorities') ? JSON.parse(atob(sessionStorage.getItem('authorities'))) : null,
  },
  getters: {
    loggedIn(state) {
      // return state.token !== null;
        return state.token !== null && state.authorities !== null;
    },
    getUser(state) {
      return state.user;
    },
    getAuthorities(state) {
      return state.authorities;
    },
  },
  mutations: {
    retrieveToken(state, { token, user, authorities }) {
      state.token = token;
      state.user = user;
      state.authorities = authorities;
    },
    destroyToken(state) {
      state.token = null;
      state.user = null;
      state.authorities = null;
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', {
          email: credentials.email,
          password: credentials.password,
        })
            .then(response => {
                // console.log(response.status);
                // if (response.data.message === 'As suas credenciais estão erradas') {
                //     reject(response.data.message);
                // }

                const token = response.data.token_data.token;
                const user = response.data.user_data;
                const authorities = response.data.user_data.permissoes;

              sessionStorage.setItem('access_token', token);
              sessionStorage.setItem('user', JSON.stringify(user));
              sessionStorage.setItem('authorities', btoa(JSON.stringify(authorities)));

              context.commit('retrieveToken', { token, user, authorities });

              resolve(response);
            })
            .catch(error => {
              reject(error);
            });
      });
    },
      logout(context) {
          return new Promise((resolve) => {
              sessionStorage.removeItem('access_token');
              sessionStorage.removeItem('user');
              sessionStorage.removeItem('authorities');

              context.commit('destroyToken');
              resolve();
          });
      }
  }
}

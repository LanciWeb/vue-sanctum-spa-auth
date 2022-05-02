import Vue from 'vue';


// # Initial state 
const state = Vue.observable({
  user: localStorage.user ? JSON.parse(localStorage.user) : null
});

// # GETTER
export const isLogged = () => state.user !== null;

// #SETTER

export const setUser = user => state.user = user;
export const removeUser = () => state.user = null;

//  ESPORTIAMO LO STORE
export default () => ({ ...state });
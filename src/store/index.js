import Vue from 'vue'
import Vuex from 'vuex'
import profiles from './modules/profiles.js'
import profileAvatars from './modules/profileAvatars.js';
import researchData from './modules/researchData.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    profiles,
    profileAvatars,
    researchData
  }
})

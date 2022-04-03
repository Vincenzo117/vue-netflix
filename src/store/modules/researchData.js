const state = {
    filter: '',
    results: []
};

const getters = {
    filter: (state) => state.filter
};

const actions = {
    search({ commit }, filter) {
        commit('updateFilter', filter);
    }
};

const mutations = {
    updateFilter: (state, filter) => (state.filter = filter),
};

export default {
    state,
    getters,
    actions,
    mutations
}
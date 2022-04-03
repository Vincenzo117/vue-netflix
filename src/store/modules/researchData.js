const axios = require('axios').default;

const state = {
    filter: '',
    results: [],
    baseURI: "https://api.themoviedb.org/3",
};

const getters = {
    filter: (state) => state.filter,
    results: (state) => state.results,
};

const actions = {
    search({ commit }, filter) {
        commit('updateFilter', filter);
    },
    fetchData({ commit }) {
        let results = [];
        axios
            .get(`${state.baseURI}/search/movie`, {
                params: {
                    api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
                    query: state.filter,
                },
            })
            .then(res => {
                results = res.data.results;
                commit('updateResults', results.filter((el) => el.backdrop_path));
            })
            .catch(err => {
                console.warn(err.response)
            })
        // getSeries() {
        //     axios
        //         .get(`${state.baseURI}/search/tv`, {
        //             params: {
        //                 api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
        //                 query: state.filter,
        //             },
        //         })
        //         .then(res => {
        //             state.seriesFound = res.data.results;
        //         })
        //         .catch(err => {
        //             console.warn(err.response)
        //         })
        // },
    }
};

const mutations = {
    updateFilter: (state, filter) => (state.filter = filter),
    updateResults: (state, newResults) => (state.results = newResults)
};

export default {
    state,
    getters,
    actions,
    mutations
}
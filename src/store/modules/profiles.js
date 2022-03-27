const state = {
    profilesArray: [
        {
            id: 1,
            name: 'Bambini',
            avatar: 'https://occ-0-3716-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABch9tWH3Rv11uz4e03DgY9K7rTb5dKnER3PcCQuzwq9VqJyCDP0vzqZbSGtosVu5sgkgw1f8vx6uGvLG6s0YuwMcxMQX.png?r=dda',
            language: 'it',
            kids: true
        },
        {
            id: 2,
            name: 'Vincenzo',
            avatar: 'https://occ-0-1068-92.1.nflxso.net/art/441d5/d6cc08e17e7e8d1364f8334ff3fffe0ebc5441d5.png',
            language: 'it',
            kids: false
        },
        {
            id: 3,
            name: 'Antonio',
            avatar: 'https://occ-0-1068-92.1.nflxso.net/art/7a4ef/459f88a156787af739866a00f11b54145887a4ef.png',
            language: 'it',
            kids: false
        },
    ],
};

const getters = {
    profiles: (state) => state.profilesArray
};

const actions = {
    createProfile({ commit } , profile) {
      commit('pushProfile', profile);
    },
    deleteProfile({ commit }, id) {
        commit('spliceProfile', id);
    },
    updateProfile( { commit }, updatedProfile) {
        commit('replaceProfile', updatedProfile);
    }
};

const mutations = {
    pushProfile: (state, profile) => (state.profilesArray.push(profile)),
    spliceProfile: (state, id) => (state.profilesArray.splice(id - 1, 1)),
    replaceProfile: (state, newProfile) => (state.profilesArray[newProfile.id - 1] = newProfile)
};

export default {
    state,
    getters,
    actions,
    mutations
}
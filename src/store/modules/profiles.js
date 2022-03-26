const state = {
    profilesArray: [
        {
            id: 1,
            name: 'Bambini',
            avatar: 'https://occ-0-3716-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABch9tWH3Rv11uz4e03DgY9K7rTb5dKnER3PcCQuzwq9VqJyCDP0vzqZbSGtosVu5sgkgw1f8vx6uGvLG6s0YuwMcxMQX.png?r=dda',
            kids: true
        },
        {
            id: 2,
            name: 'Vincenzo',
            avatar: 'https://occ-0-1068-92.1.nflxso.net/art/441d5/d6cc08e17e7e8d1364f8334ff3fffe0ebc5441d5.png',
            kids: false
        },
        {
            id: 3,
            name: 'Antonio',
            avatar: 'https://occ-0-1068-92.1.nflxso.net/art/7a4ef/459f88a156787af739866a00f11b54145887a4ef.png',
            kids: false
        },
    ],
};

const getters = {
    profiles: (state) => state.profilesArray
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}
export const state = () => ({
  initialData: "",
});

export const getters = {
  initialData: (state) => {
    return state.initialData;
  },
};

export const mutations = {
  updateInitialData: (state, payload) => {
    state.initialData = payload;
  },
};

export const actions = {
  async fetchInitialData({ commit }) {
    const response = await this.$axios.$get("/api/initialData");
    commit("updateInitialData", response);
  },
};

const leftMenu = {
    state: {
      isCollapse: true
    },
    mutations: {
      SET_COLLAPSE: (state, isCollapse) => {
        state.isCollapse = isCollapse
      },
    },
    actions: {
      setIsCollapse({ commit }, isCollapse) {
        commit('SET_COLLAPSE', isCollapse)
      },
    }
}

export default leftMenu

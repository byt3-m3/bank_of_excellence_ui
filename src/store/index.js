import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const index = new Vuex.Store({
//     state: {
//         family_id: "test"
//     }
// })


export default new Vuex.Store(
    {
        state: {
            userId: null,
            userName: null,
        },
        mutations: {
            setUserName(state, name) {
                console.log(name)
               state.userName = name
            },
             setUserId(state, id) {

               state.userId = id
            }
        },
        actions: {},
        getters: {}
    }
)
// export {
//     index
// }
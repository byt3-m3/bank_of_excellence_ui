import Vue from 'vue'
import Vuex from 'vuex'
import {UserAccountType} from '../enums'

Vue.use(Vuex)


export default new Vuex.Store(
    {
        state: {
            userId: null,
            familyID: null,
            userName: null,
            userAccountType: null
        },
        mutations: {
            setUserName(state, name) {
                console.log(name)
                state.userName = name
            },
            setUserId(state, id) {

                state.userId = id
            },
            setFamilyId(state, id) {

                state.familyID = id
            },
            setUserAccountType(state, accountType) {
                if (accountType === UserAccountType.adult) {
                    state.userAccountType = 'adult'
                }
                if (accountType === UserAccountType.child) {
                    state.userAccountType = 'child'
                }

            }
        },
        actions: {},
        getters: {}
    }
)
// export {
//     index
// }
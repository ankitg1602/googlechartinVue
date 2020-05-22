import data from "./data.json";
const store = {
    state: {
        chartData: []
    },
    getters: {
        chartData: state => {
            return state.chartData
        }
    },
    mutations: {
        CHART_DATA_MUTATION: (state, payload) => {
            state.chartData = payload
        }
    },
    actions: {
        ACTION_CHART_DATA: ({
            commit
        }, key) => {
            let tempArr = data.records.map((obj) => {
                return [obj.date, obj[key]]
            })
            tempArr.unshift(["date", key])
            console.log('tempARr:', tempArr)
            commit("CHART_DATA_MUTATION", tempArr)
        }
    }
}

export default store
import {carsActionsTypes} from "../actions";

const initialState = {
    cars: [],
    isUpdate: false,
    carForUpdate: {}
}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carsActionsTypes.SET:
            return {
                ...state,
                cars: action.payload
            }
        case carsActionsTypes.CREATE:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }
        case carsActionsTypes.DELETE:
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.payload)
            }
        case carsActionsTypes.UPDATE_CAR:
            return {
                ...state,
                isUpdate: false,
                carForUpdate: {},
                cars: state.cars.toSpliced(state.cars.findIndex(car => car.id === action.payload.id), 1, action.payload.car),
            }
        case carsActionsTypes.SET_IS_UPDATE:
            return {
                ...state,
                isUpdate: action.payload.isUpdate,
                carForUpdate: action.payload.car
            }

        default:
            return state
    }
}

export {carsReducer}
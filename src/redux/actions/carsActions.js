import {carsServices} from "../../services";

const carsActionsTypes = {
    SET: 'SET',
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    UPDATE_CAR: 'UPDATE_CAR',
    SET_IS_UPDATE: 'SET_IS_UPDATE'
}

const carsActions = {
    set: (cars) => ({type: carsActionsTypes.SET, payload: cars}),
    create: (car) => ({type: carsActionsTypes.CREATE, payload: car}),
    delete: (id) => ({type: carsActionsTypes.DELETE, payload: id}),
    updateCar: (id, car) => ({type: carsActionsTypes.UPDATE_CAR, payload: {id, car}}),
    setIsUpdate: (isUpdate, car) => ({type: carsActionsTypes.SET_IS_UPDATE, payload: {isUpdate, car}})
}

const carsThunks = {
    get: () => (dispatch) => {
        carsServices.getAll().then(({data}) => dispatch(carsActions.set(data)))
    },
   create: (car) => (dispatch) => {
        carsServices.create(car).then(({data}) => dispatch(carsActions.create(data)));
    },
    delete: (id) => (dispatch) => {
        carsServices.delete(id).then(() => dispatch(carsActions.delete(id)))
    },
    put: (id, car) => (dispatch) => {
       return carsServices.put(id, car).then(() => dispatch(carsActions.updateCar(id, car)))
    }
}

export {carsActions, carsActionsTypes, carsThunks}
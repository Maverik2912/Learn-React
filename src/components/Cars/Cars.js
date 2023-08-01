import React from "react";
import {carsService} from "../../services/carsService/carsService";
import {Car} from "./Car/Car";
import styles from './Cars.module.css';
class Cars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        carsService.getAll().then(({data}) => this.setState(({cars: data})));
    }

    render() {
        return (
            <>
                <h2 className={styles.title}>Cars</h2>
                <div className={styles.cars}>
                    {this.state.cars.map(car => <Car car={car} key={car.id} />)}
                </div>
            </>
        )
    }
}

export {Cars};
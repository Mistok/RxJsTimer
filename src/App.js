
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {interval, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

function App() {
    let [isRunning, setIsRunning] = useState(false);
    let [currentTimer, setCurrentTimer] = useState(0);
    let [firstClickTime, setFirstClickTime] = useState(0);

    useEffect(() => {
        const stopTimeout = new Subject();
        interval(1000).pipe(
                takeUntil(stopTimeout)
        ).subscribe(
            () =>
                isRunning
                    ? setCurrentTimer(val => val + 1000) //time in milliseconds
                    : null
        )
        return () => {
            stopTimeout.next();
            stopTimeout.complete();
        }
    }, [isRunning])

    let startHandler = () => {
        setIsRunning(true);
    }

    let stopHandler = () => {
        setIsRunning(false);
        setCurrentTimer(0);
    }

    let waitHandler = () => {
        if(!firstClickTime) {
            let firstClick = Date.now();
            setFirstClickTime(firstClick);
            return null;
        } else {
            let secondClick = Date.now()
            let difference = secondClick - firstClickTime;
            if( difference < 300 ) {
                setIsRunning(false);
                setFirstClickTime(0);
            }
            setFirstClickTime(0);
        }
    }

    let resetHandler = () => {
        setIsRunning(false);
        setCurrentTimer(0);
        setTimeout(startHandler, 0) // restarting timeout
    }

    return (
    <div className="App">
        <header className="App-header">
        Testing task timer
        </header>
        <div className="time_desk">
            <span>
                { new Date(currentTimer).toISOString().slice(11, 19) }
            </span>
        </div>
        <div>
            <button className="btn btn-primary" disabled={isRunning} onClick={startHandler}>start</button>
            <button className="btn btn-danger" onClick={stopHandler}>stop</button>
            <button className="btn btn-info" onClick={waitHandler}>wait</button>
            <button className="btn btn-success" onClick={resetHandler}>reset</button>
        </div>
    </div>
    );
}

export default App;

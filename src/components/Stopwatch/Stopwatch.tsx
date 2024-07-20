import * as React from 'react';
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import {ButtonGroup} from "@mui/material";

export const Stopwatch = () =>{

    // state to store time
    const [time, setTime] = useState(0);

    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    // Method to start and stop timer
    const startAndPause = () => {
        setIsRunning(!isRunning);
    };
    // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
    };

    const stopTimer = () =>{
        setIsRunning(false);
    }

    return (
        <div>
            <p>
                {hours}:{minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {milliseconds.toString().padStart(2, "0")}
            </p>
            <div>
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button variant="contained"  className="stopwatch-button" onClick={startAndPause}> {isRunning ? "Pause" : "Start"}</Button>
                <Button variant="contained" className="stopwatch-button" onClick={stopTimer}> Stop </Button>
                <Button variant="contained" className="stopwatch-button" onClick={reset}>
                    Reset
                </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
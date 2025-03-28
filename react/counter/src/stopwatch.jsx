import { useEffect, useState } from "react";

function StopWatch() {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (isRunning) {
            const startTime = Date.now() - elapsedTime;
            const id = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, );
            setIntervalId(id);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    return (
        <div>
            <h1>StopWatch</h1>
            <h2>{formatTime(elapsedTime)}</h2>
            <button className="btn start" onClick={handleStart}>
                Start
            </button>
            <button className="btn stop" onClick={handleStop}>
                Stop
            </button>
            <button className="btn reset" onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    let seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}

export default StopWatch;

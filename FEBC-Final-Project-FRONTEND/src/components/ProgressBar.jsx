import React from "react";

function ProgressBar({ progress }) {
  return (
    <>
      {progress === 100 ? (
        <div
          className="progress my-2"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{height:"10px"}}
        >
          <div
            className="progress-bar text-bg-success"
            style={{ width: `${progress}%` }}
          >100%</div>
        </div>
      ) : (
        <div
          className="progress my-2"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{height:"10px"}}
        >
          <div
            className="progress-bar text-bg-warning"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </>
  );
}

export default ProgressBar;
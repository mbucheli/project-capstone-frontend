import React from "react";
import "../App.css";

function ModalTimer({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button className="red-text" onClick={() => { closeModal(false) }}>
                        <i className="material-icons prefix">cancel</i>
                    </button>
                </div>
                <div>
                    <h4 className="title" style={{color: "black"}}>This is the Timer</h4>
                </div>
                <div className="body">
                    <p style={{color: "black"}}>The is the Timer</p>
                </div>
            </div>
        </div>
    );
}

export default ModalTimer;
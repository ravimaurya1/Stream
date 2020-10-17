import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
import {Link} from 'react-router-dom';

const Modal = props =>{
    return ReactDOM.createPortal(
        <div onClick ={() => history.push('/')} className = "ui dimmer modals visible active">
            <div onClick = {(e) => e.stopPropagation()} className = "ui standard modal visible active">
                <div className = "header">Delete Stream</div>
                <div className ="content">
                    {props.content}
                </div>
                <div className = "actions">
                    {props.renderActions}
                </div>
            </div>
        </div>, document.querySelector('#modal')
    );
};

export default Modal;
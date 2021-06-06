import React from 'react';

const AgreeOrReject = obj => {
    console.log(obj.children);
    // console.log(obj);
    return (
        <div className="ui card">
            <div className="content">{obj.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Accept</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
}

export default AgreeOrReject;
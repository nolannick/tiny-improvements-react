import React from 'react';

const Header = props => {


    const RenderTable = (kudos) => {
        //empty product table prior to rendering
        // $("#kudos").empty();
    
        //loop through products in table and insert HTML for each row of the table
        kudos.forEach(function (element) {
            return(
                `<div className="card shadow-lg p-3 mb-5 bg-white rounded">
                    <h5>${element.title}</h5>
                    <h6>From: ${element.sender.username}</h6>
                    <div className="card-body">
                        <h6>To: ${element.receiver.username}</h6>
                        <p>${element.body}</p>
                    </div>
                </div>`);
        
        });
    };

    return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3 className="title-header shadow-lg p-3 rounded">Tiny Improvements</h3>
                <hr></hr>
            </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <button className="kudos-modal btn btn-info" type="button" data-toggle="modal" data-target="#kudoModal">Give Kudos</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-9" id="kudos">
                <RenderTable />
                </div>
            </div>
        </div>
    )
    };

export default Header;
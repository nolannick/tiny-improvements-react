
import React from 'react';

const Modal = props => (

<div className="modal fade bd-example-modal-lg" id="kudoModal" tabIndex="-1" role="dialog" aria-labelledby="kudoModal" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="myModalLabel"> Give a Kudo! </h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="alertDiv"></div>
                <div className="modal-body">
                    <div id="messages"></div>
                    <form>
                        <div className="container form-group">
                            <div className="row">
                                <div className="col-lg-3 form-area">
                                    <select className="kudo-from" id="kudo-from" className="form-control btn btn-secondary">
                                        <option selected disabled value=''>Select Sender</option>
                                    </select>
                                </div>
                                <div className="col-lg-5 form-area">
                                    <input className='form-control' type="text" id="kudo-title" placeholder="Type a title!" />
                                    <textarea className='form-control' type="text" id="kudo-body" rows="5" placeholder="Type a Message!"></textarea>
                                </div>
                                <div className="col-lg-3 form-area">
                                    <select name="kudo-to" id="kudo-to" className="form-control btn btn-secondary">
                                        <option selected disabled value=''>Select Receiver</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" id="send-kudo">Send Kudos!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Modal;
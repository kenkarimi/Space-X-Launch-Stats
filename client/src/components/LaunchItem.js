import React from 'react';
import Classnames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({ launch: { flight_number, mission_name, launch_year, launch_date_local, launch_success }}) { //instead of having props.launch on every print out, we destructure here.
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: <span className={Classnames({ 'text-success': launch_success, 'text-danger': !launch_success })}>{ mission_name }</span></h4>
                    <p>Date: <Moment format="YYY-MM-DD HH:MM">{ launch_date_local }</Moment></p>
                </div>
                <div className="col-md-9">
                    <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Launch Details</Link>
                </div>
            </div>
        </div>
    )
}
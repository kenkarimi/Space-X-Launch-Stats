import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Classnames from 'classnames';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $flight_number){
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

export default function Launch(props) {
    let { flight_number } = props.match.params;
    flight_number = parseInt(flight_number);
    
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flight_number },
    });
    if(loading) return <h4>Loading...</h4>
    if(error) console.log(error);

    const { mission_name, launch_year, launch_success, rocket: { rocket_id, rocket_name, rocket_type }} = data.launch;
    
    return (
        <div>
            <h1 className="display-4 my-3"><span className="text-dark">Mission:</span> { mission_name }</h1>
            <h4 className="mb-3">Launch Details</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Flight Number { flight_number }
                </li>
                <li className="list-group-item">
                    Launch Year { launch_year }
                </li>
                <li className="list-group-item">
                    Launch Successful: <span className={Classnames({ 'text-success': launch_success, 'text-danger': !launch_success })}>{ launch_success ? 'Yes' : 'No' }</span>
                </li>
            </ul>
            <h4 className="my-3">Rocket Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Rocket ID: { rocket_id }</li>
                <li className="list-group-item">Rocket Name: { rocket_name }</li>
                <li className="list-group-item">Rocket Type: { rocket_type }</li>
            </ul>
            <hr/>
            <Link to={'/'} className="btn btn-secondary">Back</Link>
        </div>
    )
}

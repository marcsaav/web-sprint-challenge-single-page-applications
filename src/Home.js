import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory();

    const routeToForm = () => {
        history.push('/pizza')
    }

    return(
        <div>
            <h2>Enjoy your pizza, from the comfort of home!</h2>
            <button
            onClick={routeToForm}
            >
                Pizza Time!
            </button>
        </div>
    )
}
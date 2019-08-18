import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';


const DoesNotExist = () => (
    /*
        DoseNotExist component Renders only when in the ReservoirRouter's the
        url path does not match.
    */
    <div>
        <h1>404!</h1>
    </div>
);

const ReservoirRouter = () =>(
    /*
        ReservoirRouter component Renders the router which point towords the
        specific components according to the corresponding route url path
        ReservoirRouter uses the "react-router-dom" API to provide this
        functionality.
    */
    <BrowserRouter>
            <Switch>
                {/*normal*/}
                <Route path="/" component={LandingPage} exact={true}/>

                {/*404*/}
                <Route component={DoesNotExist} />
            </Switch>
    </BrowserRouter>
);

export default ReservoirRouter;

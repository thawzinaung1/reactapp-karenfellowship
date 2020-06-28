import React from 'react';
import { Breadcrumb, BreadcrumbItem , Media} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderEvents({event}){
    return(
        <div className="my-3">
            <Media>
                <Media left middle className="col-6 col-md-3">
                    <img src={event.image} alt={event.id} className="align-self-center img-fluid" width="200" height="200"/>
                </Media>
                <Media body className="col-6 col-md-9">
                    <Media heading>
                        {event.head}
                    </Media>
                    <p className="d-none d-md-block">{event.description}</p>
                </Media>
            </Media>
        </div>
    )
}

function Events(props){
    return(
        <React.Fragment>
        <div className="container">
            <div className="row my-md-5">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Events
                        </BreadcrumbItem>
                    </Breadcrumb>
            </div>
            <div className="row">
                {props.events.map((event) => <RenderEvents event={event}/>)}
            </div>
        </div>
    </React.Fragment>
    )
}

export default Events;

import React from 'react';
import { Breadcrumb, BreadcrumbItem , Media} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderEvents({event}){
    return(
        <div className="col-12 my-3">
            <Media>
                <Media left top>
                    <img src={event.image} alt={event.id} className="align-self-center img-fluid mr-3" width="200" height="200"/>
                </Media>
                <Media body>
                    <Media heading>
                        {event.head}
                    </Media>
                    {event.description}
                </Media>
            </Media>
        </div>
    )
}

function Events(props){
    return(
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
    )
}

export default Events;

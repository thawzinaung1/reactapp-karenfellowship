import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, CardLink, CardDeck} from 'reactstrap'
import { Link } from 'react-router-dom'

function RenderPerson({single}){
    return(
            <Card>
                <CardImg top src={single.image} alt={single.name}></CardImg>
                <CardBody>
                    <CardTitle>{single.name} ( {single.level} )</CardTitle>
                        <CardLink>
                            <Link to={`/history/${single.id}`}>
                                <Button className="btn" outline color="success">See more</Button>
                            </Link>
                        </CardLink>
                </CardBody>
            </Card>
    )
}

function History(props){
    return(
        <div className="container mt-5">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        History
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <h2>History</h2>
                    <p>{props.single.filter((single)=> single.description != null)[0].description}</p>
                </div>
                <div className="col-12 col-md-6">
                    <RenderPerson single={props.single.filter((single) => single.description != null)[0]}/>
                </div>
            </div>
            <div className="row">
                {props.single.filter((single) => single.description == null).map((single) => {
                    return(
                        <div key={single.id} className="col-md-6 my-2">
                            <CardDeck>
                                <RenderPerson single={single}/>
                            </CardDeck>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default History;

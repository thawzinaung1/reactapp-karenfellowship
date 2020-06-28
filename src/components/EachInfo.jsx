import React from 'react'
import {Breadcrumb, BreadcrumbItem, Media} from 'reactstrap'
import { Link } from 'react-router-dom'

function RenderInfo({single}){
    return(
        <React.Fragment>
            <div className="col-12 col-md-6">
                <img src={`${single.image}`} alt={single.name} className="img-fluid"/>
            </div>
            <div className="col-12 col-md-6">
                <div className="my-1">
                    <span className="btn btn-social-icon btn-reddit m-2"><i className="fa fa-user-o fa-lg"></i></span>{single.name}
                </div>
                <div className="my-1">
                    <span className="btn btn-social-icon btn-dropbox m-2"><i className="fa fa-university fa-lg"></i></span>{single.year}
                </div>
                <div className="my-1">
                    <span className="btn btn-social-icon btn-facebook m-2"><i className="fa fa-universal-access fa-lg"></i></span>{single.type}
                </div>
                <div className="my-1">
                    <span className="btn btn-social-icon btn-yahoo m-2"><i className="fa fa-language fa-lg"></i></span>{single.language} (Karen Language)
                </div>
                <div className="my-1">
                    <span className="btn btn-social-icon btn-microsoft m-2"><i className="fa fa-briefcase fa-lg"></i></span>{single.level}
                </div>
            </div>
            <div className="col-8 offset-2 my-3">
                <a href="#">
                    <span className="btn btn-social-icon btn-facebook m-1"><i className="fa fa-facebook fa-lg"></i></span>
                </a>
                <a href="#">
                    <span className="btn btn-social-icon btn-google m-1"><i className="fa fa-google fa-lg"></i></span>
                </a>
                <a href="#">
                    <span className="btn btn-social-icon btn-twitter m-1"><i className="fa fa-twitter fa-lg"></i></span>
                </a>
                <a href="#">
                    <span className="btn btn-social-icon btn-vimeo m-1"><i className="fa fa-phone fa-lg"></i></span>
                </a>
                <a href="#">
                    <span className="btn btn-social-icon btn-github m-1"><i className="fa fa-github fa-lg"></i></span>
                </a>
            </div>
        </React.Fragment>
    )
}

function EachInfo(props){
    return(
        <div className="container-fluid">
            <div className="row my-3 ml-3">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/history">History</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.single.name}
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <RenderInfo single={props.single}/>
            </div>
        </div>
    )
}

export default EachInfo;

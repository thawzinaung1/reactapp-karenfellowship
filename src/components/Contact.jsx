import React from 'react'
import { Breadcrumb, BreadcrumbItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import ucsy from '../ucsy.jpg'

function Contact(){
    return(
        <div className="container">
            <div className="row my-md-5">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                    </Breadcrumb>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="mb-5">
                        <h2 className="mb-3">Contact Us</h2>
                            <a className="btn btn-social-icon btn-facebook mr-3" href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-tumblr" href="#"><i className="fa fa-envelope fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-vimeo ml-3" href="#"><i className="fa fa-phone fa-lg"></i></a>
                    </div>
                    <div>
                        <h2>Location</h2>
                        <address className="mt-3">
                            <div>
                                <i className="fa fa-home fa-lg m-2"></i>Yangon Region
                            </div>
                            <div>
                                <i className="fa fa-building fa-lg m-2"></i> Shwe-pyi-thar Township
                            </div>
                            <div>
                                <i className="fa fa-university fa-lg m-2"></i><a href="www.ucsy.edu.mm" className="ucsy_icon">University Of Computer Studies, Yangon</a>
                            </div>
                        </address>
                    </div>
                </div>
                <div className="col-12 col-md">
                    <img src={ucsy} className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Contact;

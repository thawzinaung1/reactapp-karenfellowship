import React from 'react';
import { Jumbotron } from 'reactstrap';

function Footer(props){
    return(
        <footer className="mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <h2>Coporation</h2>
                        {props.flags.map((flag) => <img key={flag.image} src={flag.image} height="40" width="40" className="mx-2 my-3" alt={flag.title} title={flag.title}/>)}
                    </div>
                    <div className="col-md-4 mt-3">
                        <h2>Location</h2>
                        <address className="mt-4">
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
                    <div className="col-md mt-4">
                        <h2>Contact Us</h2>
                        <div>
                            <div className="my-4">
                                <a href="tel:199">
                                    <span className="btn btn-social-icon btn-vimeo">
                                        <i className="fa fa-phone fa-lg"></i>
                                    </span>  +959771111167
                                </a>
                            </div>
                            <div  className="my-4">
                                <a href="mailto:thawzinaung1@ucsy.edu.mm">
                                        <span className="btn btn-social-icon btn-tumblr">
                                            <i className="fa fa-envelope-o fa-lg"></i>
                                        </span>  thawzinaung1@ucsy.edu.mm
                                    </a>
                            </div>
                            <div className="my-4">
                                <a href="#">
                                        <span className="btn btn-social-icon btn-facebook">
                                            <i className="fa fa-facebook fa-lg"></i>
                                        </span>  UCSY-Karen Fellowship
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row justify-content-center copy">
                        <span>&copy; Copyright 2020 !<em>TzA</em></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

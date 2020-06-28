import React, { useState } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Button, Collapse, NavbarToggler, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Row, FormFeedback, CustomInput} from 'reactstrap';
import { Link } from 'react-router-dom'

function Header(props){
    const[modal, setModal] = useState(false);
    const [collapse , setCollapse] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <div className="container" className="mr-auto header">
            <Navbar expand="md" dark>
                <NavbarBrand href="/" active className="image"> <img src={props.flag.image} height="50" width="80" title="UCSY-Karen Fellowship"/></NavbarBrand>
                <NavbarToggler onClick={()=> setCollapse(!collapse)}></NavbarToggler>
                <Collapse isOpen={collapse} navbar>
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink href="/history">History</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/events">Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <Button outline color="success">
                            <NavItem onClick={toggle}>Register</NavItem>
                        </Button>
                    </Nav>
                </Collapse>
            </Navbar>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Register</ModalHeader>
                <ModalBody>
                    <Form autoComplete="off">
                        <FormGroup row>
                            <Label htmlFor="firstname" className="col-2">First Name</Label>
                            <Col>
                                <Input type="text" id="firstname" name="firstname"
                                     placeholder="First Name"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" className="col-2">Last Name</Label>
                            <Col>
                                <Input type="text" id="lastname" name="lastname"
                                     placeholder="Last Name"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" className="col-2">Email</Label>
                            <Col>
                                <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="race" className="col-2">Race</Label>
                            <Col>
                                <Input type="select" id="race">
                                    <option>Poe(East)</option>
                                    <option>Poe(West)</option>
                                    <option>Sakhaw</option>
                                    <option>Burmese-Karen</option>
                                    <option>Pa-Oe</option>
                                    <option>Other</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="choose" className="col-2">Karen Language</Label>
                            <Col>
                                <CustomInput type="switch" id="choose" name="language" label="Turn on if you can speak"/>
                            </Col>
                        </FormGroup>
                        <Row form>
                            <Label htmlFor="gender" className="col-2">Gender</Label>
                            <FormGroup row>
                                <Col className="ml-5 ml-md-4">
                                    <Input type="radio" id="gender" name="gender" /> Male
                                </Col>
                                <Col>
                                    <Input type="radio" id="gender" name="gender" /> Female
                                </Col>
                            </FormGroup>
                        </Row>
                        <Button outline color="success" className="offset-2">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Header;

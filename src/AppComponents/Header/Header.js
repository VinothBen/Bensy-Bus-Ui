import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(props) {
        this.props.actions.getHeaderConfig("Hai!!");
    }
    render() {
        const { config } = this.props;
        return (<div className="headerWrapper">
            <Row className="headerTitle">
                <Col className="headerIcon" xs="3">&nbsp;</Col>
                <Col className="headerMainTitle" xs="3">Summa!</Col>
               <Row className="headerSubMenu">
                <Col className="headerSubMenuRow" xs="3">BUS</Col> 
                <Col className="headerSubMenuRow" xs="3">HOTELS</Col>  
                <Col className="headerSubMenuRow" xs="3">TRAIN</Col>
                <Col className="headerSubMenuRow" xs="3">FLIGHT</Col>
               </Row>
              <Row className="headerUserDetails">
                 <Col  xs="3"><span className="headerUserIcon">&nbsp;</span>location
                          <span className="headerDropdownIcon">&nbsp;</span>
                 </Col>
              </Row> 
              <Row className="hederLoginLogo">
              <Col  xs="3"><span className="headerUserLogo">&nbsp;</span></Col>
              </Row>            
            </Row>
            <p>{config}<span className="headerMainLogo">&nbsp;</span></p>
        </div>);
    }
}
export default Header;
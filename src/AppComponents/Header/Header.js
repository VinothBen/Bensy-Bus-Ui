import React, { Component } from "react";
import { Row, Col, Tooltip, OverlayTrigger} from "react-bootstrap";
// import Test from "./Test"

class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.actions.getHomePageConfig();
    }
    componentWillReceiveProps(nextProps) {
       console.log("...nextProps", nextProps);
    }
    getNavigationComponents = (value)=>{
        let component =[];
        value.map((item, index)=>{
        component.push(<OverlayTrigger 
                            overlay={<Tooltip className="headerTooltip" id={index} positionTop={10}>{item}</Tooltip>}
                            delayShow={0}
                            delayHide={0}
                            placement="bottom" 
                        >
                        <Col key={index} className="headerSubMenuRow" xs={3}>{item}</Col></OverlayTrigger>); 
                });
        return component;
    }
    render() {
        const { config } = this.props;
        return (<div className="headerWrapper">
            <Row className="headerTitle">
                <Col className="headerIcon" xs={3}>&nbsp;</Col>
                <Col className="headerMainTitle" xs={3}>{config.headerLabel}</Col>
                <Row className="headerSubMenu">
                    {!_.isEmpty(config.navigations)?this.getNavigationComponents(config.navigations):null}
                </Row>
                <Row className="headerUserDetails">
                    <Col ><span className="headerUserIcon">&nbsp;</span>location
                            <span className="headerDropdownIcon">&nbsp;</span>
                    </Col>
                </Row> 
                <Row className="hederLoginLogo">
                <Col  xs={3}><span className="headerUserLogo">&nbsp;</span></Col>
                </Row>            
            </Row>
        </div>);
    }
}
export default Header;
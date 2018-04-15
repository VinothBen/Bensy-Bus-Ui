import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col, Tooltip, OverlayTrigger, ListGroup, ListGroupItem} from "react-bootstrap";
// import Test from "./Test"
import BusInfoContainer from "../FrameWorkComponents/BusInfoContainer/BusInfoContainer";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLocations:false,
            location:"Select Location",
            showUserOptions: false 
        };
        this.mockData = [
            {
                "busName":"Blue Moon Travels",
                "busManufacturerName": "Volvo A/C Multi-Axle Semisleeper (2+2)",
                "depatureTime": "22:40",
                "arrivalTime": "04:05",
                "travalingTime": "05 h 25m",
                "ratings": "4.7",
                "totalRatings": "1464",
                "availableSeats": "24",
                "windowSeats": "9",
                "ticketPrice": "600",
                "utilities": "water-bottle,blankets,charging-poits,reading-light,emergency-exit,snacks,wifi",
                "gpsAvailable":"true",
                "id":1234
    
            },
            {
                "busName":"Benz Travels",
                "busManufacturerName": "Benz A/C Multi-Axle Semisleeper (2+2)",
                "depatureTime": "22:40",
                "arrivalTime": "04:05",
                "travalingTime": "05 h 25m",
                "ratings": "4.7",
                "totalRatings": "1464",
                "availableSeats": "24",
                "windowSeats": "9",
                "ticketPrice": "600",
                "utilities": "water-bottle,blankets,charging-poits,reading-light,emergency-exit,snacks,wifi",
                "gpsAvailable":"false",
                "id":1235
    
            }
    ];
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
                            key={index} 
                        >
                        <Col key={index} className="headerSubMenuRow" xs={3}>{item}</Col></OverlayTrigger>); 
                });
        return component;
    }
    onChangeLocation = (value) =>{
        this.setState({location: value});
    }
    getOverlayLoationsComponent = (object) =>{
        let component = <div/>;
        let listComponent = [];
        if(!_.isEmpty(object)){
            object.map((item, index)=>{
                listComponent.push(<li onClick={()=>this.onChangeLocation(item, "false")} key={index}>{item}</li>);
            })
            component = <div className="locationOverlay">
                <div className="upArrow"></div>
                <ul>
                    {listComponent}
                </ul>
            </div>;
        }    
           
        return component;
        
    }
    onClickHandler = () =>{
        this.setState({showLocations:!this.state.showLocations});
    }
    showUserOptions = (key) =>{
        this.setState({showUserOptions: key});
    }
    getUserOptions = (object) =>{
        let component = <div/>;
        let listComponent = [];
        if(!_.isEmpty(object)){
            object.map((item, index)=>{
                listComponent.push(<li onClick={()=>this.onChangeLocation(item,"true")} key={index}>{item}</li>);
            })
            component = <span className="locationOverlayUO" onMouseEnter={()=>this.showUserOptions(true)} onMouseLeave={()=>this.showUserOptions(false)}>
                <div className="upArrow"></div>
                <ul>
                    {listComponent}
                </ul>
            </span >;
        }    
           
        return component;
        
    }
    getBusDetailsComponents = (busInfo) =>{
        let components = [];
        busInfo.map((item, index)=>{
            components.push(<BusInfoContainer key = {index} busDetails= {item}/>);
        });
        return components;
    }
    render() {
        const { config } = this.props;
        const { showLocations, location, showUserOptions } = this.state;
        return (<div className="headerWrapper">
            <Row className="headerTitle">
                <Col className="headerIcon" xs={3}>&nbsp;</Col>
                <Col className="headerMainTitle" xs={3}>{config.headerLabel}</Col>
                <Row className="headerSubMenu">
                    {!_.isEmpty(config.navigations)?this.getNavigationComponents(config.navigations):null}
                </Row>
                <Row className="headerUserDetails" onClick={this.onClickHandler}>
                        { 
                            showLocations?this.getOverlayLoationsComponent(config.locations):null
                        }
                    <Col ><span className="headerUserIcon">&nbsp;</span>{location}
                            <span className="headerDropdownIcon">&nbsp;</span>
                    </Col>
                </Row> 
                <Row className="hederLoginLogo">
                    {
                        showUserOptions?this.getUserOptions(config.useroptions):null
                    }
                <Col  xs={3}><span onMouseEnter={()=>this.showUserOptions(true)} onMouseLeave={()=>this.showUserOptions(false)} className="headerUserLogo">&nbsp;</span></Col>
                </Row>            
            </Row>
            <div style={{marginTop:"15px"}}>{this.getBusDetailsComponents(this.mockData)}</div>
        </div>);
    }
}
export default Header;
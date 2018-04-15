import React from "react";
import { Row, Col, Button, OverlayTrigger, Tooltip} from "react-bootstrap";
class BusInfoContainer extends React.Component{
    constructor(props, contaxt){
        super(props);
        this.state = {
            busDetails:{},
            busUtilities:[]
        }
    }
 componentWillReceiveProps = (nextProps)=>{
    if(_.has(nextProps, "busDetails.utilities")){
        let busUtilities = nextProps.busDetails.utilities.trim().split(",");
        this.setState({busDetails: nextProps.busDetails, busUtilities});
    }
    
 }
 getUtilitiesComponents = () =>{
     if(!_.isEmpty(this.state.busUtilities)){
        let component = [];
        this.state.busUtilities.map((item)=>{
            component.push(<li><OverlayTrigger 
                                    overlay={<Tooltip className="headerTooltip" id={item} positionTop={10}>{item}</Tooltip>}
                                    delayShow={0}
                                    delayHide={0}
                                    placement="bottom"
                                >
                            <span className={item}>&nbsp;</span></OverlayTrigger></li>);
        });
        return component;
     }
 }
 getBusDetailsComponets = (obj)=>{
    let component = <div/>;
    if(!_.isEmpty(obj)){
        let gpsMessage = obj.gpsAvailable ==="true"? "GPS Tracking System Enabled" : "No GPS Tracking System";
        component = (<div>
                        <Row className="firstRow">
                            <Col xs={3}>
                                <span>{obj.busName}</span>
                                <OverlayTrigger 
                                        overlay={<Tooltip className="headerTooltip" id={obj.id} positionTop={10}>{gpsMessage}</Tooltip>}
                                        delayShow={0}
                                        delayHide={0}
                                        placement="bottom"
                                        key={obj.id}
                                    >
                                    <span className={obj.gpsAvailable ==="true"?"busLogoWithGPS":"busLogoWOGPS"}>&nbsp;</span>
                                </OverlayTrigger>
                            </Col>
                            <Col className="secondColumn" xs={2}><span>{obj.depatureTime}<span className="travellingArrow">&nbsp;</span>{obj.arrivalTime}</span></Col>
                            <Col className="thirdColumn" xs={2}><span>{obj.ratings}/5</span></Col>
                            <Col className="fourthColumn" xs={3}><span>{obj.availableSeats} Available Seats</span></Col>
                            <Col className="fifthColumn" xs={2}><span>INR {obj.ticketPrice}</span></Col>
                        </Row>
                        <Row className="secondRow">
                            <Col xs={3}><span>{obj.busManufacturerName}</span></Col>
                            <Col xs={2}><OverlayTrigger 
                                    overlay={<Tooltip className="headerTooltip" id={obj.travalingTime} positionTop={10}>Travel Time</Tooltip>}
                                    delayShow={0}
                                    delayHide={0}
                                    placement="bottom"
                                >
                            <span>{obj.travalingTime}</span></OverlayTrigger></Col>
                            <Col xs={2}>
                                <OverlayTrigger 
                                    overlay={<Tooltip className="headerTooltip" id={obj.totalRatings} positionTop={10}>Users Rating</Tooltip>}
                                    delayShow={0}
                                    delayHide={0}
                                    placement="bottom"
                                >
                            <span>({obj.totalRatings} Ratings)</span></OverlayTrigger></Col>
                            <Col className="fourthColumn" xs={3}><span>{obj.windowSeats} Window Seats</span></Col>
                            <Col className="fifthColumn" xs={2}><span><Button className="btn btn-primary">Select Seats</Button></span></Col>
                        </Row>  
                        <Row>
                            <Col>
                                {/* <OverlayTrigger 
                                    overlay={<Tooltip className="headerTooltip" id={this.state.busUtilities[0]} positionTop={10}>{this.state.busUtilities[0]}</Tooltip>}
                                    delayShow={0}
                                    delayHide={0}
                                    placement="bottom"
                                >
                            <span className="wifi">&nbsp;</span></OverlayTrigger> */}
                            <ul>{this.getUtilitiesComponents()}</ul>
                           </Col>
                        </Row>
                    </div> 
                );
     }
    return component;
 }
    render(){
        console.log("...state", this.state, this.props);
        return (<div className="busContainerWrapper">
                    <div className="busDetailsRow">
                        {this.getBusDetailsComponets(this.state.busDetails)}
                    </div>
                </div>);
    }
}
export default BusInfoContainer;
import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Classes from './GenPinApp.module.css';
import NavigationPanel from './NavigationPanel';
import { Link } from 'react-router-dom';
import { deletePinAction, userNameChangeAction } from '../Actions/generatePinAction';

class SavedPinListTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin_one: '', pin_two: '', pin_three: '', pin_four: '', pin_five: ''
        }
    }

    // Called on click of DELETE Button
    deletePin = (item) => {
        deletePinAction(item);
    }

    // Called on change of user name input
    userNameChange = (e, item) => {
        let editedName = e.target.value;
        userNameChangeAction(editedName, item)
    }

    render() {
        let generatedPinArray = this.props.savedListState && this.props.savedListState.userObject ? this.props.savedListState.userObject : [];
        let emptyMessage = generatedPinArray && generatedPinArray.length === 0 ? true : false;
        return (
            <React.Fragment>
                <Container>
                    <NavigationPanel />
                    <Container className={Classes.bodyContainer}>
                        <Container className={Classes.savedPinContainer}>
                            {!emptyMessage && generatedPinArray.map((item, index) => {
                                return (
                                    <Row key={index}>
                                        <Col xs lg="3" className={Classes.pinFieldCol}>
                                            <input className={Classes.pinField} onChange={(e) => this.userNameChange(e, item)} type="text" defaultValue={item.userName} />
                                        </Col>
                                        <Col xs lg="1.5" className={Classes.pinFieldCol}>
                                            <input className={Classes.pinField} type="text" defaultValue={item.p1} />
                                        </Col>
                                        <Col xs lg="1.5" className={Classes.pinFieldCol}>
                                            <input className={Classes.pinField} type="text" defaultValue={item.p2} />
                                        </Col>
                                        <Col xs lg="1.5" className={Classes.pinFieldCol}>
                                            <input className={Classes.pinField} type="text" defaultValue={item.p3} />
                                        </Col>
                                        <Col xs lg="1.5" className={Classes.pinFieldCol}>
                                            <input className={Classes.pinField} type="text" defaultValue={item.p4} />
                                        </Col>
                                        <Col xs lg="1.5" className={Classes.pinFieldCol}>
                                            <input className={Classes.pinField} type="text" defaultValue={item.p5} />
                                        </Col>
                                        <Col xs lg="1.5" className={Classes.pinFieldCol}>
                                            <input className={Classes.deleteButton} item={item} onClick={() => { this.deletePin(item)}} type="button" value="DELETE" />
                                        </Col>
                                    </Row>)
                            })}
                            {emptyMessage &&
                            <Container className={Classes.emptyMsgContainer}>
                            <Row className={Classes.emptyMessage}>No saved pins available to show !</Row>
                            <Row style={{display:"block"}}><Link to="/">Click here to try generating new pins!</Link></Row>
                            </Container>
                            }
                        </Container>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }

}

export const mapStateToProps = (state) =>{
    return{
        savedListState: state
    }
}
export default connect(mapStateToProps)(SavedPinListTab);

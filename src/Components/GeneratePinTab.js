import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Classes from './GenPinApp.module.css';
import NavigationPanel from './NavigationPanel';
import { GenPinFunction } from '../Common/GenPinFunction';
import { generatePinAction, savePinAction } from '../Actions/generatePinAction';

class GeneratePinTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            generatedPinArray: ['', '', '', '', ''], alertClass:false
        }
    }

    // Called on click of GENERATE button
    generatePin = () => {
        let generatedPinArrayValue = GenPinFunction();
        this.setState({ generatedPinArray: generatedPinArrayValue, alertClass:false });
        generatePinAction(generatedPinArrayValue);
    }

    // Called on click of SAVE button
    savePin = () => {
        let savePinObj = { userName: '', p1: '', p2: '', p3: '', p4: '', p5: '' };
        let genPinList = this.state.generatedPinArray;
        let userObject = this.props.genPinState.userObject;
        let existingFlag = false;

        // Validation on click of SAVE button
        if (genPinList && genPinList.length > 0) {

            /* Proceed when the input fields are not empty */
            if (genPinList[0] !== '' && genPinList[1] !== '' && genPinList[2] !== '' && genPinList[3] !== '' && genPinList[4] !== '') {

                for (let i = 0; i < userObject.length; i++) {
                    if (userObject[i].p1 === genPinList[0] && userObject[i].p2 === genPinList[1] && userObject[i].p3 === genPinList[2] && userObject[i].p4 === genPinList[3] && userObject[i].p5 === genPinList[4]) {
                        existingFlag = true;
                    }
                }
                if (existingFlag) {
                    /* Alert when the pin combination already exist in saved list */
                    window.alert("Pin Already exists in Saved pin List !")
                    this.setState({alertClass:true})
                }
                else {
                    /*save pin to the pin list */
                    savePinObj.userName = "User " + Date.now();
                    savePinObj.p1 = genPinList[0];
                    savePinObj.p2 = genPinList[1];
                    savePinObj.p3 = genPinList[2];
                    savePinObj.p4 = genPinList[3];
                    savePinObj.p5 = genPinList[4];
                    savePinAction(savePinObj);
                    window.alert("Pin Saved !");
                }
            } else {
                /* Alert when input fields are empty */
                this.setState({alertClass:true})
                window.alert("Pin number cannot be empty !");
            }
        }
    }

    render() {
        let generatedPinArray = this.state.generatedPinArray;
        let isAlert = this.state.alertClass;
        return (
            <React.Fragment>
                <Container>
                    <NavigationPanel />
                    <Container className={Classes.bodyContainer}>
                        <Container className={Classes.generatePinContainer}>
                            <Row>
                                {generatedPinArray.map((item, index) => {
                                    return (
                                        <Col xs lg="2" key={index} className={Classes.pinGenCol}>
                                            <input className={isAlert ? Classes.pinFieldAlert : Classes.pinField} type="text" placeholder="1111" readOnly value={item} />
                                        </Col>)
                                })}
                            </Row>
                            <Row>
                                <Col xs lg="5" className={Classes.generateButtonCol}>
                                    <input id="generate" className={Classes.generateButton} type="button" onClick={() => { this.generatePin() }} value="GENERATE" />
                                </Col>
                                <Col xs lg="5" className={Classes.saveButtonCol}>
                                    <input id="save" className={Classes.saveButton} type="button" onClick={() => { this.savePin() }} value="SAVE" />
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        genPinState: state
    }
}

export default connect(mapStateToProps)(GeneratePinTab);

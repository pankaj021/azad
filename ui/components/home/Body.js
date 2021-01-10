import React from 'react';
import {connect} from 'react-redux';
import {Accordion, AccordionCollapsed, AccordionExpanded} from '../pattern-lib';
import Teacher from '../home/Teacher';
import Target from '../home/Target';
import Donation from '../home/Donation';
import Contributor from '../home/Contributor';


function Body() {
    return (
        <div className="body-page">
            <Accordion>
                <AccordionCollapsed title='Teachers'/>
                <AccordionExpanded>
                    <Teacher/>
                </AccordionExpanded>
            </Accordion>
            <Accordion>
                <AccordionCollapsed title='Targets'/>
                <AccordionExpanded>
                    <Target/>
                </AccordionExpanded>
            </Accordion>
            <Accordion>
                <AccordionCollapsed title='Donations'/>
                <AccordionExpanded>
                    <Donation/>
                </AccordionExpanded>
            </Accordion>
            <Accordion>
                <AccordionCollapsed title='Contributors'/>
                <AccordionExpanded>
                    <Contributor/>
                </AccordionExpanded>
            </Accordion>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Body);
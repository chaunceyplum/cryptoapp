import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { CardBody, CardHeader, CardSubtitle, CardTitle } from 'reactstrap'



const DisplayComponent = (props) => {
    
    return (
        
        <div>
            
            
        
            {
                
                props.data.data.map((curr, index) => {
                    return(
                        
                        
                            <div  >
                                <Card key = {index}  className='cardy'>
                                    <CardHeader className="cardHeader">
                                        <h1 className="text-center">
                                            {
                                                curr.name
                                            }
                                        </h1>
                                        <CardSubtitle className="text-center">
                                            <p>
                                                {
                                                    curr.symbol
                                                }
                                            </p>
                                        </CardSubtitle>
                                    </CardHeader>
                                    <CardBody className="cardBody">
                                        <ul>
                                            <li className="text-center">
                                                {
                                                    `United States Dollar:  ${curr.priceUsd}`
                                                }
                                            </li>
                                            <br />
                                            <li className="text-center">
                                                {
                                                    `Market Cap:    ${curr.marketCapUsd}`
                                                }
                                            </li>
                                            <br />
                                            <li className="text-center">
                                                {
                                                    `Volume:   ${curr.volumeUsd24Hr}`
                                                }
                                            </li>
                                            <br />
                                            <li className="text-center">
                                                {
                                                    `Percent of Change/24hr: ${curr.changePercent24Hr}`
                                                }
                                            </li>
                                            
                                        </ul>

                                    </CardBody>
                                </Card>
                                <br />
                                <br />
                        
                            </div>
                    )
                })
            }
    
        </div>
    )
}

export default DisplayComponent

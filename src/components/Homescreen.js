import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { CardBody, CardHeader, CardSubtitle } from 'reactstrap'
import DisplayComponent from './DisplayComponent'

const Homescreen = () => {
    
    const [data, setData] = useState([])
    const [loaded, setLoaded] =useState(false)


    useEffect(() => {
        try {
            fetch('https://api.coincap.io/v2/assets'
        )
        .then(res => res.json())
        .then(res => {
            setData(res)
            if(res !== 0) {
                setLoaded(true)
                console.log(res)
            }
        })
        } catch(err) {
            console.log(err)
        }
       
        
        

        
    },[])

    
    
    return (
        <div>
            <div className="homeBg">
                <Row>
                    <h1>
                        FinanceApp
                    </h1>
                    <br />
                    <h6>
                        CoinCap API 2.O
                    </h6>
                    <p></p>

                </Row>
                
                    <div  className="center ">
                    
                        {
                            loaded === true ?
                            <Col xs={11} sm={9} className="mx-auto">
                                <DisplayComponent data={data}   />
                            </Col>
                            :
                            <div>
                                ...loading
                            </div>
                        }
                        
                    </div>
                
            </div>
            
        </div>
    )
}

export default Homescreen

import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { CardBody, CardHeader, CardSubtitle } from 'reactstrap'
import DisplayComponent from './DisplayComponent'

const Homescreen = () => {
    
    const [data, setData] = useState([])
    const [loaded, setLoaded] =useState(false)
    const [search , setSearch] = useState('')


    useEffect(() => {
        try {
            fetch('https://api.coincap.io/v2/assets'
        //     ,
        //  {
        //     mode:'cors',
        //     headers: {
        //         'Content-Type' : 'application/json',
        //         // 'Access-Control-Allow-Origin' : '*'
        //     } 
 

        // }
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

    // const handleChange = e => {
    //     setSearch(e.target.value)
    // }
    // const searchRes = data.data.filter((currency) => currency.name.toLowerCase().includes(search.toLowerCase())
    // )
    
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
                <Row>
                    {/* <form>
                        <input type="text" placeholder="Search" onChange={handleChange} />
                    </form> */}
                </Row>
                    <div  className="center ">
                     {/* searchComponent */}
                        {/* {
                            searchRes.map(curr => {
                                return(
                                    <DisplayComponent data={data}/>
                                )
                            })
                        } */}
                        
                        {/* display #1 */}
                        {
                            loaded === true ?
                            <DisplayComponent data={data}   />
                            :
                            <div>
                                ...loading
                            </div>
                        }



                        {/* display #2 */}
                        {/* {
                            data.data.map((curr, index) => {
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
                        } */}
                    </div>
                
            </div>
            
        </div>
    )
}

export default Homescreen

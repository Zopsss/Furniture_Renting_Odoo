import React from "react";
import Item_Photo from '../image/Item1_cart.png'

const ShoppingCart = () => {
    return (
        <>
        <div className="ShoppingCart ps-4 pe-4 card d-flex flex-row" style={{width: '95%', margin: '0 auto', marginTop: '5rem'}} >
            <div className="table_sec" style={{width: "65%"}}>
                <table style={{width: "100%", height: 'fit-content'}} className="mt-3">
                    <thead style={{ backgroundColor: '#f8f9fb', height: '4rem', borderRadius: '10px'}}>
                        <tr >
                            <th style={{width: '70%'}}>Product</th>
                            <th style={{width: '15%'}}>Price</th>
                            <th style={{width: '15%'}}></th>
                        </tr>
                    </thead>
                </table>

                <table style={{width: "100%", height: 'fit-content', margin: '2rem 0'}} >
                        <tr>
                            <td style={{width: '100%'}} className="d-flex mb-5">
                                <div className="cart_ts_part1_1" style={{height: '6rem', width: '7rem'}}>
                                    <img src={Item_Photo} alt="" height="100%" width="100%"/>
                                </div>
                                <div className="cart_ts_part1_2 ms-4 d-flex flex-column justify-content-evenly" style={{}} >
                                    <b>Montes Scelerisque</b>
                                    <div className="cart_size_color d-flex" >
                                        <b style={{paddingRight: '0.3rem'}}>Size </b> : Large 
                                        <b style={{paddingRight: '0.3rem',marginLeft: '1rem'}}>Color</b>: brown
                                    </div>
                                </div>
                            </td>
                            <td style={{width: '15%'}}>$248,66</td>
                            <td style={{width: '15%'}}> <button className="btn btn-danger">Delete</button> </td>
                        </tr>
                        <tr>
                            <td style={{width: '100%'}} className="d-flex ">
                                <div className="cart_ts_part1_1" style={{height: '6rem', width: '7rem'}}>
                                    <img src={Item_Photo} alt="" height="100%" width="100%"/>
                                </div>
                                <div className="cart_ts_part1_2 ms-4 d-flex flex-column justify-content-evenly" style={{}} >
                                    <b>Montes Scelerisque</b>
                                    <div className="cart_size_color d-flex" >
                                        <b style={{paddingRight: '0.3rem'}}>Size </b> : Large 
                                        <b style={{paddingRight: '0.3rem',marginLeft: '1rem'}}>Color</b>: brown
                                    </div>
                                </div>
                            </td>
                            <td style={{width: '15%'}}>$248,66</td>
                            <td style={{width: '15%'}}> <button className="btn btn-danger">Delete</button> </td>
                        </tr>
                </table>
            </div>
            
            <div className="Summary card mt-3 mb-3 pt-3 ps-4 pe-4"  style={{width: "30%", height: "fit-content", marginLeft: '5%', backgroundColor: '#f8f9fb', borderRadius: '10px', border: '0px solid' }}>
                <div className="summary_title" style={{fontWeight: 'bold'}} >Order Summary</div>
                <div className="card mt-2 mb-3 p-4" style={{width: "100%", height: "fit-content", border: '0px solid' }} >
                    <div className="summary_sec_details" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="summary_sec_details_title">Subtotal :</div>
                        <div className="summary_sec_details_data">$488</div>
                    </div>
                    <div className="summary_sec_details" style={{display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem'}}>
                        <div className="summary_sec_details_title">Discount :</div>
                        <div className="summary_sec_details_data">$0</div>
                    </div>
                    <div className="summary_sec_details" style={{display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem'}}>
                        <div className="summary_sec_details_title">Shipping Charge :</div>
                        <div className="summary_sec_details_data">$30</div>
                    </div>  
                    <div className="summary_sec_details" style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                        <div className="summary_sec_details_title"><b>Total :</b></div>
                        <div className="summary_sec_details_data" style={{color: '#8231d3'}}> <b>$498</b></div>
                    </div>  
                    <button className="btn" style={{backgroundColor: '#8231d3', color: 'white', width: '100%', marginTop: '2rem'}}>Proceed To Checkout </button>
                </div>  
            </div>
        </div>
        </>
        
    )
}

export default ShoppingCart
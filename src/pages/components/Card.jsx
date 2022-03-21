import React from 'react'

const Card = (title) => {
  return (
    <div>
      <div classNameName="product-before-badge">
                        <div className="product-card">
                            <div className="img-panel">
                                <img src="/assets/images/mattress-1.jpg" alt=""/>
                                
                            </div>
                            <div className="title-panel">
                                <div className="rating-section">
                                    <div className="rating-stars">
                                        <i className="fa fa-star" ></i>
                                        <i className="fa fa-star" ></i>
                                        <i className="fa fa-star" ></i>
                                        <i className="fa fa-star" ></i>
                                        <i className="fa fa-star" ></i>
                                    </div>
                                </div>
                                <h3>
                                    {title}
                                </h3>
                            </div>
                            <div className="price-section">
                                <div className="real-price">
                                    ₹5000
                                </div>
                                <div className="mrp-price">
                                    <s>₹4000</s>
                                </div>
                            </div>
                            <div className="warranty">
                                <i className="fa fa-car" ></i>
                                <p>10 year manufacturer's warranty</p>
                            </div>
                            <div className="buy-now-btn">
                                Shop now
                            </div>
                            
                        </div>
                        <div className="product-badge">Best Seller</div>
                    </div>
    </div>
  )
}

export default Card
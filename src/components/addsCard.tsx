
import "../styles/adds-card.css";
import { useState } from 'react';


export const AddsCard = () => {
  const [quantity, setquantity] = useState(0);


  return (
    <>
      <div className="adds-card  text-center" >
        <div className="card-body">
          <p className='large'>PASS ADD-ONS</p>
          <div className=" d-flex justify-content-left">
            <div className="row">
              <div className="col-7">
                <input name="quantity" value={quantity} onChange={(e) => {
                  e.preventDefault();
                  const value = e.target.value.replace(/\D/g, "");
                  setquantity(Number(value))
                }} className='form-control' type={'text'} />
              </div>
              <div className="col-5">
                <p className="small">PASS INSURANCE</p>
                <p className="small" style={{ marginTop: '-20px' }}>$25 per pass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

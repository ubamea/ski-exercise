import { ComponentState, useEffect, useState } from 'react';
import { IPassesModel } from '../models/Passes.model';


import '../styles/PassCard.scss';
import { AddsCard } from './addsCard';

interface ICardState {
    personQty: number;
    insurance: number;
    total: number;
}

export const PassCard = (props: IPassesModel) => {
    const {
        applyBlackOutDate,
        destinations,
        price,
        title,
        type,
        additionalDescription,
        upToDays,
        totalDays
    } = props;



    const [cardState, setCardState] = useState<ICardState>({
        insurance: 0,
        personQty: 0,
        total: 0
    });

    const handleDetailsClicks = () => {
        const w = window.open('https://www.ski.com', '_blank');
        if (w) {
            w.focus();
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value.replace(/\D/g, "");
        setCardState({ ...cardState, [e.target.name]: Number(value) } as ComponentState);
    };

    useEffect(() => {

        setCardState({ ...cardState, total: price * cardState.personQty })

    }, [cardState.personQty, price])

    return (
        <>
            <div className="card main-card text-center">

                <div className="card-body">
                    <div className=" type-card">{type}</div>
                    <div className="title-card">{title}</div>

                    {applyBlackOutDate ?
                        <p className="small-text">BLACKOUT DATES APPLY</p>
                        :
                        <div className='btn blackouts'>NO BLACKOUT DATES</div>
                    }
                    <br />

                    {!applyBlackOutDate ?
                        <>
                            <p className='large-text'>{totalDays} UNLIMITED</p>
                            <p style={{ marginTop: '-15px' }} className="small-text">{additionalDescription}</p>
                        </> : ''}


                    {!applyBlackOutDate ? <p className='large-text'>UP TO {upToDays} DAYS</p> : <p className='large-text'>{totalDays} DAYS TOTAL</p>}
                    <p className="small-text" style={{ marginTop: '-15px' }}>AT {destinations} DESTINATIONS</p>
                    <br />

                    <p className='blue-small-text' onClick={handleDetailsClicks}> VIEW DETAILS
                        <i style={{ marginLeft: '5px' }} className="fas fa-chevron-circle-down"></i></p>
                    <p className="price" style={{ marginTop: '-15px' }}>${price}</p>
                    <p className='card-text text-muted' style={{ marginTop: '-15px' }}>PER PERSON</p>
                </div>

                <div className="card-footer ">
                    <div className=" d-flex justify-content-center">
                        <input style={{ maxWidth: '40%' }} name="personQty" value={cardState.personQty}
                            onChange={handleChange}
                            className='form-control' type={'text'} />
                        <h5 className='total'>${cardState.total}</h5> <h5 style={{ marginLeft: '5px' }}>Total</h5>
                    </div>
                </div>
            </div>
            <AddsCard />
        </>
    )
}

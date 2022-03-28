import "../styles/nav-options.css";
import { ICheckBoxModel } from '../models/checkBoxModel';
import { useState } from 'react';

interface Props {
    checkBoxes: ICheckBoxModel[];
}

export const NavOptions = ({ checkBoxes }: Props) => {

    const [checked, setchecked] = useState(checkBoxes);

    const handleChange = (e: ICheckBoxModel) => {
        e.isChecked = !e.isChecked;
        setchecked({ ...checked })
    }
    return (
        <>
            <hr />
            <div className="container-fluid">

                <div className="row">
                    {checkBoxes.map(check => {
                        return <div key={check.name} className="col">
                            <div className="form-check">
                                <label className="form-check-label check-label" >{check.name}</label>
                                <input style={{ marginLeft: '50px', width: '18px', height: '18px' }} onClick={() => { handleChange(check) }} className="form-check-input-reverse" checked={check.isChecked} type="checkbox" />
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <hr />
        </>
    )
}

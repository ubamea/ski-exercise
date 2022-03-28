import { PassCard } from '../components/PassCard';
import { NavOptions } from "../components/NavOptions"
import { IPassesModel } from '../models/Passes.model';
import { mockedCheckBoxes, PassesMockedData } from "../data/passesMockedData";
import { TitleBar } from '../components/TitleBar';
import { ICheckBoxModel } from '../models/checkBoxModel';

export const Passes = () => {

  const passesData: IPassesModel[] = PassesMockedData();
  const checkBoxes: ICheckBoxModel[] = mockedCheckBoxes();


  return (
    <>
      <TitleBar text="PASSES" />
      <br />
      <NavOptions checkBoxes={checkBoxes} />
      <br />
      <div className='container-fluid'>
        <div className="row" >
          {passesData.map(pass => {
            return <div key={pass.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <PassCard  {...pass} />
            </div>
          })}

        </div>
      </div>
    </>
  )
}

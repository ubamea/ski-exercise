import { IPassesModel } from '../models/Passes.model';
import { ICheckBoxModel } from '../models/checkBoxModel';

export const PassesMockedData = (): IPassesModel[] => {

    const mockedPasses: IPassesModel[] = [
        {
            id: 1,
            applyBlackOutDate: true,
            destinations: 37,
            price: 399,
            title: 'IKON SESSION',
            type: 'ADULT',
            totalDays: 4
        },
        {
            id: 2,
            applyBlackOutDate: false,
            destinations: 28,
            price: 899,
            title: 'IKON PASS',
            type: 'RENEWAL ADULT',
            totalDays: 15,
            upToDays: 7,
            additionalDescription: 'SKIING & RIDING DESTINATIONS'
        }, {
            id: 3,
            applyBlackOutDate: false,
            destinations: 28,
            price: 319,
            title: 'IKON PASS',
            type: 'CHILD',
            totalDays: 15,
            upToDays: 7,
            additionalDescription: 'SKIING & RIDING DESTINATIONS'
        },

    ]

    return mockedPasses;
}


export const mockedCheckBoxes = (): ICheckBoxModel[] => {

    return [{
        name: 'FILTER',
        isChecked: false
    },
    {
        name: 'REGULAR PASSES',
        isChecked: false
    }, {
        name: 'RENEWAL PASSES',
        isChecked: false
    }, {
        name: 'ADULT',
        isChecked: false
    }, {
        name: 'CHILD',
        isChecked: false
    }
    ]
} 
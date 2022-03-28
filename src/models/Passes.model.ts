export interface IPassesModel {
    id:number;
    type: string;
    title: string;
    applyBlackOutDate: boolean;
    destinations: number;
    price: number;
    totalDays: number;
    upToDays?: number;
    additionalDescription?: string;
}
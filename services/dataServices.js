import { Data } from "../models/dataModel.js";

export const getData = async () => {
    try {
        let dataGot = await Data.find({});
        console.log(dataGot)
        if (dataGot) {
            return ({status:'success',data: dataGot});
        }
        else {
            return ({status:'error',message:'Data Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}
export const getOneData = async (dataId) => {
    try {
        let dataGot = await Data.find({id: dataId});
        console.log(dataGot)
        if (dataGot) {
            return ({status:'success',data: dataGot});
        }
        else {
            return ({status:'error',message:'Data Doesnot exist '});
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}

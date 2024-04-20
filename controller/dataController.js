import { getData, getOneData} from "../services/dataServices.js";

export const getDataHandler = async(req,res) => {
    try {
        let getAllData = await getData();
        if(getAllData){
            res.send({message: 'Data fetched successfully', data: getAllData}); 
            console.log(getAllData);
        }
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}
export const getOneDataHandler = async(req,res) => {
    let data = req.body;
    try {
        let getAllData = await getOneData(data.id);
        if(getAllData){
            res.send({message: 'Data fetched successfully', data: getAllData}); 
            console.log(getAllData);
        }
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}


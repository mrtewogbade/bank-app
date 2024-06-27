import Db from './index';  

const DbInitialize = async () => {
    try 
        {
            await Db.authenticate();
        } catch ( error ) {
            console.log("Unable to connect to the database: ", error);
        }
    
};

export default DbInitialize;
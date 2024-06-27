import express, {Request, Response, Express, NextFunction} from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import DbInitialize from './src/database/init';

const app: Express = express();

app.use(cors({
    origin: '*',

}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((err: TypeError, req: Request, res: Response, next: NextFunction) => { 
    try {
        if (err) {
            return res.status(500).json({ status: false, message: (err as TypeError).message });
        }
    }catch(e){}
});


app.get('/', (req: Request, res: Response) => {
    res.send(`Welcome to ${process.env.APPNAME}`);
});

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// DbInitialize();
// console.log("Database connected");

async function startServer() {
    try {
        await DbInitialize();
        app.listen(PORT, () => {
            console.log(`Connection to the database was successful. Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log("Unable to connect to the database: ", error);
    }
}

startServer()








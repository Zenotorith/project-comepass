import express, {Request, Response} from 'express';
import cors from 'cors';
import { authAPIKey } from './middleware/auth';
import mail from './util/mail';
import validation from './middleware/validation';
import {apiLimiter} from './middleware/limit'

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.post('/api/form', apiLimiter, authAPIKey, validation.requestValidation, mail.sendMail);

app.get('*', (req: Request, res: Response) => {
    res.status(404).json({
        status: 404,
        message: 'Not found service.'
    })
})

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});

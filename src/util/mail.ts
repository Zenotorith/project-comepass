import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import moment from 'moment-timezone';
import { Request, Response } from 'express';

export interface Email {
    name: string;
    phone: string;
    email: string;
    description: string;
}

class Mail {
    private userEmail: string = 'info.comepassacademy@gmail.com';
    private clientId: string = '186761213375-oooaf39fmp39q1u4cfv7q9044epa551t.apps.googleusercontent.com';
    private clientSecret: string = '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';
    private refreshToken: string = '1//04V8lMC8N3ScpCgYIARAAGAQSNwF-L9Irb7iTB6tIkFvsD2Q15zbpl-CUrtVnPo2VKbtV4ye0qxc6bdgpJG08Sv1ycvETAZ8skHA';
    private redirectUrl: string = 'https://developers.google.com/oauthplayground';
    private sender: string = 'SENDER SERVICE EMAIL COMEPASS';
    private managerEmail: string = 'ieltscomepass@gmail.com';

    public sendMail = async (req: Request, res: Response) => {
        try {
            const {name, phone, email, description} = req.body
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: this.userEmail,
                    clientId: this.clientId,
                    clientSecret: this.clientSecret,
                    refreshToken: this.refreshToken,
                    accessToken: await this.getAccessTokenGmail()!
                }
            } as SMTPTransport.Options);
            const infoSender = this.sender;
            await transport.sendMail({
                from: infoSender,
                to: this.managerEmail,
                subject: `Request for Consultation: ${name} - ${phone.trim()} - ${email.trim()}`,
                html: `
                    <p>Full Name: <strong>${name}</strong></p>
                    <p>Phone Number: <strong>${phone.trim()}</strong></p>
                    <p>Email: <strong>${email.trim()}</strong></p>
                    <p>Content to consult: <strong>${description}</strong></p>
                    <small>Sent: ${moment().tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY HH:mm:ss')}</small>
                `
            });
            res.status(200).json({
                status: 200,
                message: 'Email has been sent.'
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: 'Something went wrong!'
            });
        }
    };

    private async getAccessTokenGmail() {
        try {
            const oauth2Client = new google.auth.OAuth2(this.clientId, this.clientSecret, this.redirectUrl);
            oauth2Client.setCredentials({ refresh_token: this.refreshToken });
            const accessToken = await oauth2Client.getAccessToken();
            return accessToken;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new Mail();

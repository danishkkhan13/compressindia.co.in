// src/pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const requiredEnvVars = [
        'CPANEL_EMAIL_HOST',
        'CPANEL_EMAIL_USER',
        'CPANEL_EMAIL_PASSWORD',
        'EMAIL_RECEIVER'
    ];

    const missingVars = requiredEnvVars.filter(v => !process.env[v]);
    if (missingVars.length > 0) {
        console.error('Missing environment variables:', missingVars);
        return res.status(500).json({
            status: 500,
            message: 'Server configuration error',
            error: `Missing: ${missingVars.join(', ')}`,
        });
    }

    try {
        const { name, email, phone, subject, message } = req.body;

        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({
                status: 400,
                message: "All fields are required",
                error: "Validation failed",
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.CPANEL_EMAIL_HOST,
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.CPANEL_EMAIL_USER,
                pass: process.env.CPANEL_EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: true,
            },
        });

        await transporter.verify();

        const formattedMessage = message.replace(/\n/g, '<br>');

        const mailOptions = {
            from: `"${process.env.NEXT_PUBLIC_SITE_NAME || 'Website'} Contact" <${process.env.CPANEL_EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER,
            replyTo: email,
            subject: `New Contact Submission: ${name}`,
            html: `
                <div>
                    <h2>Subject: Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong><br>${formattedMessage}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ status: 200, message: 'Message sent successfully' });
    } catch (error: any) {
        console.error('Email Error:', error);
        return res.status(500).json({
            status: 500,
            message: 'Failed to send message',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
}

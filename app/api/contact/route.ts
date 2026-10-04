import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: Request) {

    
    try {
        const body = await request.json()
        const { name, email, phone, subject, budget, message, type } = body;


        if (!name || !email || !subject || !message) {
            throw new Error("All fields are required")
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        if (type === "ESTIMATE") {
            await transporter.sendMail({
                from: `"${name}" <${process.env.SMTP_USER}>`,
                replyTo: email,
                to: "hasnainalam1166@gmail.com",
                subject: `${name} is requesting free estimate for ${subject} service.`,
                text: message,
                html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p> <p><strong>Subject:</strong> ${subject}</p> <p><strong>Budget:</strong> ${budget}$</p> <p>${message}</p>`,
            });
        } else {
            await transporter.sendMail({
                from: `"${name}" <${process.env.SMTP_USER}>`,
                replyTo: email,
                to: "hasnainalam1166@gmail.com",
                subject: `New message from ${name}`,
                text: message,
                html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Subject:</strong> ${subject}</p><p>${message}</p>`,
            });
        }

        return NextResponse.json(
            { success: true, message: "Message received" },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
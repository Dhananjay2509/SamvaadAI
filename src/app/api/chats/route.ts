// GET: return all chats, newest first
// POST: create a new chat from { name }
import {prisma} from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (request: Request) {
    try {
        const chats = await prisma.chat.findMany({
            include: {
                messages: true
            },
            orderBy: {
                updatedAt: "desc"
            }
        });

        if(chats.length){
            return NextResponse.json(chats, {status: 200});
        } 
    } catch (error) {
        console.error("Error fetching chats: ", error)
        return NextResponse.json({
            message: "Internal Server Error"
        },{
            status: 500
        })
    }
}

export async function POST (request: Request) {
    try {
        const {name} = await request.json();

        const newChat = await prisma.chat.create({
            data: {
                name: name
            }
        });

        return NextResponse.json({
            message: "Chat created successfully",
            chat: {
                id: newChat.id,
                name: newChat.name
            }
        },{
            status: 201
        })
    } catch (error) {
        console.error("Error occured during chat creation: ", error);
        return NextResponse.json({
            message: "Internal Server Error"
        },{
            status: 500
        })
    }
}
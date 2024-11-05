import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { NextRequest, NextResponse } from "../../../../node_modules/next/server";

const prisma = new PrismaClient
export async function POST (req:NextRequest){
    const {user,password}=await req.json();
    const validar_usuario=await prisma.alumno.findUnique({
        where: (user)
    })
}

import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    const { nombre, user, password } = await req.json();
    const unico = await prisma.alumno.findUnique({
        where: (user)
    })
    if (unico) {
        return NextResponse.json("Este alumno ya existe")
    }
    const password_encriptate = await bcrypt.hash(password, 10)
    const alumno_creado = await prisma.alumno.create({
        data: {
            nombre,
            user,
            password
        }
    })
    if (alumno_creado) {
        return NextResponse.json(alumno_creado)
    }
}

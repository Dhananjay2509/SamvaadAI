// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'

async function main() {
    const prisma = new PrismaClient()

    const hashedPassword = await bcryptjs.hash('password123', 10)

    console.log('Starting seed...')

    const user = await prisma.user.upsert({
        where: { email: 'test@example.com' },
        update: {},
        create: {
            email: 'test@example.com',
            username: 'testuser',
            password: hashedPassword,
        },
    })

    console.log('✅ Seed successful! User created:', user.username)
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e)
        process.exit(1)
    })

const hashedPassword = await bcrypt.hash(password, 10);
const newUser = await prisma.user.create({
    data: {
        username: "testuser",
        email: "test@example.com",
        password: hashedPassword
    }
})
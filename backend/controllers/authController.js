const prisma = require("../lib/prisma");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    // 1. Ambil nama, email, dan password dari request body
    const { name, email, password } = req.body;

    try {
        // 2. Validasi input: pastikan nama, email, dan password tidak kosong
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // 3. Cek apakah email sudah terdaftar
        const existingUser = await prisma.user.findUnique({
            where: { email: email },
        });
        // 4. Jika email sudah terdaftar, kembalikan error
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 5. Hash password menggunakan bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 6. Simpan user baru ke database
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            },
        });

        // 7. Kirim respons sukses (tanpa password)
        // Hapus password dari objek sebelum mengirim respons
        delete newUser.password;
        res.status(201).json({
            message: "User registered successfully",
            user: newUser,
        });

    } catch (error) {
        // 8. Tangani error
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

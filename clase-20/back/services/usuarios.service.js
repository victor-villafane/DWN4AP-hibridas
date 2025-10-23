import { MongoClient, ObjectId } from "mongodb"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const client = new MongoClient("mongodb+srv://admin:admin@dwn4ap.9nkvut8.mongodb.net")
const db = client.db("DWN4AP")

const SECRET = "clave secreta"

export async function createUser(usuario) {
    client.connect()

    const existe = await db.collection("usuarios").findOne({ email: usuario.email })
    if (existe) throw new Error("No se pudo crear el usuario")

    const nuevoUsuario = { ...usuario, password: undefined, passwordConfirm: undefined }
    nuevoUsuario.password = await bcrypt.hash(usuario.password, 10)
    await db.collection("usuarios").insertOne(nuevoUsuario)

    return {...nuevoUsuario, password: undefined}
}

export async function login(usuario) {
    await client.connect()
    const token = jwt.sign({ "usuario": "homero", "rol": "admin", "email": "Lo que quieran" }, SECRET, { expiresIn: "2h" })
    console.log(token)
    const existe = await db.collection("usuarios").findOne({ email: usuario.email })
    console.log(existe)
    if (!existe) throw new Error("No se pudo loguear")

    const esValido = await bcrypt.compare(usuario.password, existe.password)
    console.log(esValido)

    if (!esValido) throw new Error("No se pudo loguear")

    return { ...existe, password: undefined, passwordConfirm: undefined }
}
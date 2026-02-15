import { registerAs } from "@nestjs/config";
import { isEmail, isInt } from "class-validator";

export default registerAs('mail', () => {

    const envs = ['MAIL_HOST', 'MAIL_PORT', 'MAIL_USER', 'MAIL_PASS', 'MAIL_FROM']
    envs.forEach(env => {
        if (!process.env[env]) throw new Error(`Config Mail : ${env} manquant`)
    })

    if (!isInt(Number(process.env.MAIL_PORT))) throw new Error('Config Mail: MAIL_PORT invalide')
    if (!isEmail(process.env.MAIL_FROM)) throw new Error('Config Mail : MAIL_FROM invalide')

    return {
        host: process.env.MAIL_HOST!,
        port: parseInt(process.env.MAIL_PORT!),
        user: process.env.MAIL_USER!,
        pass: process.env.MAIL_PASS!,
        from: process.env.MAIL_FROM!
    }
    
})
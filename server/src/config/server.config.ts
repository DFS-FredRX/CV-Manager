import { registerAs } from "@nestjs/config";

export default registerAs('server', () => {

    const envs = ['JWT_SECRET', 'JWT_EXPIRES', 'LOGO_URL', 'COPY_URL']
    envs.forEach(env => {
        if (!process.env[env]) throw new Error(`Config Server : ${env} manquant`)
    })

    return {
        jwt: {secret: process.env.JWT_SECRET!, expires: process.env.JWT_EXPIRES!},
        logo: process.env.LOGO_URL!
    }
    
})
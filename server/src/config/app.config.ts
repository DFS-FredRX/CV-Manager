import { registerAs } from "@nestjs/config";

export default registerAs('app', () => {

    const envs = ['FRONTEND_URL', 'BACKEND_URL']
    envs.forEach(env => {
        if (!process.env[env]) throw new Error(`Config App: ${env} manquant`)
    })

    return {
        frontend: process.env.FRONTEND_URL!,
        backend: process.env.BACKEND_URL!
    }
    
})
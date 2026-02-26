export const register = {
    firstname: {
        required: {
            value: true,
            message: "Le prénom est requis"
        }
    },
    lastname: {
        required: {
            value: true,
            message: "Le nom est requis"
        }
    },
    username: {
        required: {
            value: true,
            message: "Le pseudo est requis"
        },
        minLength: {
            value: 3,
            message: "Le pseudo doit contenir au moins 3 caractères"
        },
        maxLength: {
            value: 12,
            message: "Le pseudo doit contenir moins de 12 caractères"
        },
        pattern: {
            value: /^[a-zA-Z0-9_-]+$/,
            message: "Le pseudo peut contenir lettres, des chiffres, des tiret ou des underscores"
        }
    },
    email: {
        required: {
            value: true,
            message: "L'adresse mail est requise"
        },
        pattern: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: "Veuillez entrer une adresse mail valide"
        }
    },
    password: {
        required: {
            value: true,
            message: "Le mot de passe est requis"
        },
        minLength: {
            value: 12,
            message: "Le mot de passe doit contenir au moins 12 caractères"
        },
        pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?!.*\s).{12,}$/,
            message: "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial"
        }
    }
}
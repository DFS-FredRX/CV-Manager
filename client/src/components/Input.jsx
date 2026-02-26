import { register as schema } from "src/assets/scripts/validationsRules"
import { useNotification } from "src/contexts/NotificationContext"

export default function Input({ type = 'text', label, value, onChange }) {

    const { showNotification } = useNotification()

    const labels = {
        firstname: 'Prénom',
        lastname: 'Nom',
        username: 'Pseudo',
        email: 'Adresse mail',
        password: 'Mot de passe',
        confirmPassword: 'Confirmation du mot de passe'
    }

    const attributes = (field) => {
        const rules = schema[field]
        return {
            required: rules?.required?.value,
            minLength: rules?.minLength?.value,
            maxLength: rules?.maxLength?.value,
            pattern: rules?.pattern?.value?.source
        }
    }

    const handleBlur = (e) => {
        const { validity, name } = e.target
        const rules = schema[name]
        if (!rules) return
        let message = ''
        if (validity.valueMissing) message = rules.required?.message
        else if (validity.patternMismatch) message = rules.pattern?.message
        else if (validity.tooShort) message = rules.minLength?.message
        else if (validity.tooLong) message = rules.maxLength?.message
        if (message) showNotification(message, 'error')
    }

    return (
        <div className={`input-container ${label}`}>
            <label htmlFor={label}>{labels[label]}</label>
            <input type={type} name={label} id={label} value={value} onChange={onChange} onBlur={handleBlur} {...attributes(label)} />
        </div>
    )

}
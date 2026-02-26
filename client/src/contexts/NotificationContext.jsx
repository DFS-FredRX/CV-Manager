import { createContext, useContext, useEffect, useState } from "react"
import 'src/assets/styles/notification.css'

const NotificationContext = createContext()

export function NotificationProvider({ children }) {

    const [ config, setConfig ] = useState({ show: false, message: '', type: 'error' })

    const showNotification = (message, type = 'error') => {
        setConfig({ show: true, message, type })
    }

    useEffect(() => {
        if (config.show) {
            const timer = setTimeout(() => {
                setConfig(prev => ({ ...prev, show: false }))
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [config.show])

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <div className={`notification-container${config.show ? ' show' : ''} ${config.type}-notification`}>
                <div className="notification-content">
                    <span className='material-symbols-rounded'>{config.type === 'success' ? 'check' : 'error'}</span>
                    <span>{config.message}</span>
                </div>
            </div>
        </NotificationContext.Provider>
    )

}

export const useNotification = () => useContext(NotificationContext)
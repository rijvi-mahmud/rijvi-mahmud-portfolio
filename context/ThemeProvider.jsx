"use client"
import {
    ThemeProvider as Provider
} from 'next-themes'

export default function ThemeProvider({ children }) {
    return (
        <Provider attribute="class" defaultTheme='dark'>
            {children}
        </Provider>
    )
}
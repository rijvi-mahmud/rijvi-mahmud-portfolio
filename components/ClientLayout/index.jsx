"use client"
import { useState } from "react";
import Loader from "../ui/loader";

export default function ClientLayout({ children }) {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <Loader loading={loading} isLoading={setLoading}>
                {children}
            </Loader>
        </>
    )
}
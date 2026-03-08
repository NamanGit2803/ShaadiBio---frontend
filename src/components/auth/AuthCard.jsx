// src/pages/auth/AuthCard.jsx

import { Card, CardContent } from "@/components/ui/card";

export default function AuthCard({ title, subtitle, children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 to-pink-50 px-3">
            <Card className="w-full max-w-md shadow-lg border-none rounded-2xl">
                <CardContent className="p-8 space-y-5">
                    <div className="text-center space-y-1">
                        <h1 className="text-2xl font-bold text-dark">{title}</h1>
                        <p className="text-sm text-muted-foreground">{subtitle}</p>
                    </div>

                    {children}
                </CardContent>
            </Card>
        </div>
    );
}
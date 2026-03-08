import React from 'react'
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
    return (
        <section className="max-w-6xl mx-auto mt-24 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">What Users Say</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 shadow-md">
                    <p className="text-dark/90">
                        “The easiest biodata generator I've ever used. Worked like a charm!”
                    </p>
                    <h4 className="font-semibold mt-4">— Priya, Bangalore</h4>
                </Card>

                <Card className="p-6 shadow-md">
                    <p className="text-dark/90">
                        “I created a beautiful biodata for my sister within 10 minutes.”
                    </p>
                    <h4 className="font-semibold mt-4">— Deepak, Delhi</h4>
                </Card>

                <Card className="p-6 shadow-md">
                    <p className="text-dark/90">
                        “The templates are clean, modern, and perfect for sharing.”
                    </p>
                    <h4 className="font-semibold mt-4">— Aisha, Mumbai</h4>
                </Card>
            </div>
        </section>
    )
}

export default Testimonials
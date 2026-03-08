import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="text-center mt-10 px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Create Beautiful Marriage Biodata
                <span className="text-fourth"> Instantly</span>
            </h1>

            <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
                A modern biodata builder to generate clean, professional marriage biodata
                within minutes. Choose templates, customize & download as PDF.
            </p>

            <div className="mt-6">
                <Link to="/dashboard/create">
                    <Button size="lg" className="px-8 py-6 text-lg shadow-md hover:cursor-pointer">
                        Create Biodata
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero
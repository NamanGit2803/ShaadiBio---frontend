import React from 'react'
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CTA = () => {

    const navigate = useNavigate()

    return (
        <section className="mt-24 text-center py-16 bg-third text-white">
            <h2 className="text-4xl font-bold">Start Creating Your Biodata Today</h2>
            <p className="text-lg mt-2 opacity-90">
                It only takes a few minutes to create your perfect marriage biodata.
            </p>
            <Button onClick={() => navigate('/dashboard/create')} size="lg" className="mt-6 text-lg px-8 py-6 bg-secondary text-third hover:bg-gray-100 hover:cursor-pointer">
                Create Your Biodata
            </Button>
        </section>
    )
}

export default CTA
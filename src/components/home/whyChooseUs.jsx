import React from 'react'
import { Lightbulb, LayoutTemplate, Zap } from 'lucide-react';

const features = [
    {
        title: 'Smart & Easy Workflow',
        icon: Lightbulb,
        description: 'No complicated forms. Everything is beautifully organized into steps so you can finish your biodata in minutes.',
    },
    {
        title: 'Modern Templates',
        icon: LayoutTemplate,
        description: 'Professionally designed biodata templates suitable for marriage bureaus, family references, and online platforms.'
    },
    {
        title: 'Fast PDF Download',
        icon: Zap,
        description: 'One-click PDF download with high quality printing optimized output.'
    }
]

const WhyChooseUs = () => {
    return (
        <section className="max-w-6xl mx-auto mt-24 px-6">
            <h2 className="text-3xl font-bold text-center mb-14">Why Choose <span className='text-third'>ShaadiBio ?</span></h2>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    {features?.map(feat => (
                        <div key={feat.title} className='flex flex-col gap-1'>
                            <h3 className="text-xl font-semibold flex items-center gap-3"><feat.icon className='text-third size-5'/> {feat.title}</h3>
                            <p className="text-muted-foreground">
                                {feat.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div>
                    <img
                        src="./bg2.svg"
                        alt="Dashboard Preview"
                        className=" w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
import React from 'react'
import DashboardLayout from '@/components/layout/dashboardLayout'
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { templates } from '@/lib/templates';

const Templates = () => {

    const navigate = useNavigate()

    return (
        <DashboardLayout>
            <div className='max-w-5xl mx-auto py-8 px-4'>

                {/* Page Title */}
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Templates
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {templates.map((temp, i) => (
                        <div
                            key={i}
                            className="relative group h-60 sm:h-84 w-full overflow-hidden rounded-lg shadow-md cursor-pointer"
                        >
                            <img
                                src={temp.img}
                                alt="template"
                                className="w-full h-full object-fill"
                            />

                            {/* Overlay */}
                            <div
                                className="
      absolute inset-0 bg-primary/30 flex items-center justify-center
      opacity-0 group-hover:opacity-100
      transition duration-300
    "
                            >
                                <Button
                                    className="
        bg-third px-4 py-2 rounded-md font-medium
        transform translate-y-10 opacity-0 hover:bg-fourth hover:cursor-pointer
        group-hover:translate-y-0 group-hover:opacity-100
        transition-all duration-300 ease-out"
                                    onClick={() => navigate(temp.route)}
                                >
                                    Use Template
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </DashboardLayout>
    )
}

export default Templates
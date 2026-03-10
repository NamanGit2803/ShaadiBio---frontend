import React from "react";
import { useParams } from "react-router-dom";
import Template1 from "@/templates/Template1";
import Template2 from "@/templates/Template2";
import { templates } from "@/lib/templates";
import { Check } from "lucide-react";
import { useBioStore } from "@/hooks/useBioStore";
import Navbar from "@/components/layout/navbar";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";

const TemplateView = () => {
    const { templateName } = useParams();
    const { setContactSection, contactSectionHide } = useBioStore()
    const navigate = useNavigate()
    const templateRef = useRef();
    const [loading, setLoading] = useState(false)

    const templatesData = {
        template1: <Template1 />,
        template2: <Template2 />,
    };

    const handleDownload = async () => {
        if (!templateRef.current) return;

        setLoading(true)

        const dataUrl = await toPng(templateRef.current, {
            cacheBust: true,
            pixelRatio: 3
        });

        const pdf = new jsPDF("p", "mm", "a4");

        const img = new Image();
        img.src = dataUrl;

        img.onload = () => {
            const imgWidth = 210;
            const imgHeight = (img.height * imgWidth) / img.width;

            pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("biodata.pdf");
        };

        setLoading(false)
    }

    return (
        <>
            <Navbar />
            <div className="h-dvh grid grid-cols-1 lg:grid-cols-3">

                {/* LEFT SIDE TEMPLATE PREVIEW */}
                <div className="bg-gray-50 p-6 no-scrollbar overflow-y-scroll col-span-2">
                    <div className="bg-white shadow-lg p-6 space-y-3 ">
                        <div ref={templateRef}>
                            {templatesData[templateName] || <h1>Template Not Found</h1>}
                        </div>
                        <div className="space-y-4">
                            {/* contact section handle  */}
                            <div className="flex gap-2 items-center">
                                <Checkbox id="terms-checkbox" name="terms-checkbox" checked={contactSectionHide} onCheckedChange={(value) => setContactSection(value)} />
                                <Label htmlFor="terms-checkbox" className='text-dark'>Hide contact details in the biodata?</Label>
                            </div>

                            {/* manage  */}
                            <div className="flex justify-between">
                                <Button className='hover:cursor-pointer' onClick={() => navigate('/dashboard/create')}>Edit Data</Button>
                                <Button className='hover:cursor-pointer' disabled={loading} onClick={handleDownload}>{loading ? "Downloading..." : "Continue & Download"}</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE TEMPLATES */}
                <div className="bg-custom p-6 overflow-y-scroll">
                    <h1 className="text-2xl font-bold text-dark mb-6">More Templates</h1>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        {templates.map((temp) => {
                            const isSelected = temp.id === templateName;

                            return (
                                <div
                                    key={temp.id}
                                    className={`relative h-64 w-60 shadow-md rounded-md overflow-hidden  duration-100 hover:cursor-pointer ${isSelected ? 'hover:scale-100' : 'hover:scale-105'}`} onClick={() => (!isSelected && navigate(temp.route))}
                                >
                                    <img
                                        src={temp.img}
                                        alt="templates"
                                        className="w-full h-full object-fill"
                                    />

                                    {/* Selected Overlay */}
                                    {isSelected && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <div className="bg-green-500 text-white p-2 rounded-full">
                                                <Check size={24} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </>
    );
};

export default TemplateView;
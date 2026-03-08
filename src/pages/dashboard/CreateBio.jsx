import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/dashboardLayout";

// Forms
import PersonalDetailsForm from "@/components/form/PersonalDetailsForm";
import FamilyDetailsForm from "@/components/form/FamilyDetailsForm";
import EducationProfessionForm from "@/components/form/EducationProfessionForm";
import HoroscopeForm from "@/components/form/HoroscopeForm";
import ProfilePhoto from "@/components/form/ProfilePhoto";
import ContactForm from "@/components/form/ContactForm";

// Zustand
import { useBioStore } from "@/hooks/useBioStore";

export default function CreateBio() {
    const navigate = useNavigate();
    const { personal } = useBioStore();

    const [step, setStep] = useState(1);

    const next = () => setStep((prev) => prev + 1);
    const back = () => setStep((prev) => prev - 1);

    const steps = [
        "Personal",
        "Family",
        "Education",
        "Contact",
        "Horoscope",
        "Photo",
    ];

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto py-8 px-4">

                {/* Page Title */}
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Create Your Marriage Biodata
                </h1>

                {/* Step Indicator */}
                <div className="flex justify-between mb-8">
                    {steps.map((label, index) => {
                        const active = step === index + 1;
                        const completed = step > index + 1;

                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div
                                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold
                ${active ? "bg-fourth text-white" : completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
                                >
                                    {index + 1}
                                </div>
                                <p className="text-xs mt-1 text-gray-700">{label}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Form Card */}
                <Card className="shadow-lg">
                    <CardContent className="p-6">
                        {step === 1 && <PersonalDetailsForm setStep={setStep}/>}
                        {step === 2 && <FamilyDetailsForm setStep={setStep}/>}
                        {step === 3 && <EducationProfessionForm setStep={setStep}/>}
                        {step === 4 && <ContactForm setStep={setStep}/>}
                        {step === 5 && <HoroscopeForm setStep={setStep}/>}
                        {step === 6 && <ProfilePhoto />}
                    </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <Button
                        variant="outline"
                        disabled={step === 1}
                        onClick={back}
                    >
                        Back
                    </Button>

                    {step < 6 ? (
                        <Button onClick={next}>Next</Button>
                    ) : (
                        <Button onClick={() => navigate("/dashboard/templates")}>
                            View Templates
                        </Button>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
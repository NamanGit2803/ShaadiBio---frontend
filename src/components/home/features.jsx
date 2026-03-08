import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, LayoutTemplate, Eye } from "lucide-react";

const features = [
    {
        title: "Easy to Use",
        description: "Fill in details step-by-step with a clean and simple interface.",
        icon: Sparkles,
    },
    {
        title: "Multiple Templates",
        description: "Choose from different beautiful marriage biodata templates.",
        icon: LayoutTemplate,
    },
    {
        title: "Instant Preview",
        description: "Live preview your biodata instantly as you fill details.",
        icon: Eye,
    },
];

const Features = () => {
    return (
        <div className="max-w-6xl mx-auto mt-24 px-6 grid gap-8 md:grid-cols-3">
            {features.map((f, i) => (
                <Card key={i} className="group shadow-lg hover:shadow-2xl backdrop-blur-md bg-background/70 hover:bg-background/90 transition-all rounded-2xl border border-white/40">
                    <CardContent className="p-8 text-center">
                        <div
                            className={`mx-auto mb-4 w-14 h-14 rounded-full bg-linear-to-br from-fourth to-pink-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                        >
                            <f.icon className="text-secondary" size={28} />
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                        <p className="text-muted-foreground">{f.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Features;
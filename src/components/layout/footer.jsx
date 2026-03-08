// src/components/layout/Footer.jsx

import { Link } from "react-router-dom";

const footerSections = [
    {
        title: "Product",
        links: [
            { name: "Create BioData", path: "/create" },
            { name: "Templates", path: "/templates" },
            { name: "Features", path: "/features" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Terms of Service", path: "/terms" },
            { name: "Contact", path: "/contact" },
        ],
    },
];

export default function Footer({
    brandName = "ShaadiBio",
    description = "Create professional marriage biodata in minutes with beautiful templates.",
}) {
    return (
        <footer className="bg-gray-100 border-t">
            <div className="max-w-6xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-semibold text-third">
                            {brandName}
                        </h2>

                        <p className="text-dark/90 mt-3 text-sm">
                            {description}
                        </p>
                    </div>

                    {/* Dynamic Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-medium text-gray-900 mb-3">
                                {section.title}
                            </h3>

                            <ul className="space-y-2 text-sm text-dark/90">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="hover:text-fourth transition"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Bottom */}
                <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} <span className="text-third">{brandName}</span>. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
import { useBioStore } from "@/hooks/useBioStore";

export default function Template1() {
    const { personal, family, education, horoscope, photo, contact, contactSectionHide } = useBioStore();

    console.log(horoscope)

    return (
        <div className="max-w-4xl mx-auto bg-white border rounded-xl shadow-sm overflow-hidden">

            {/* Header */}
            <div className="bg-gray-100 p-6 text-center border-b">
                <h1 className="text-3xl font-bold tracking-wide">
                    {personal.name ?? 'Name'}
                </h1>
                <p className="text-muted-foreground mt-1">
                    Marriage Biodata
                </p>
            </div>

            <div className="grid grid-cols-3 gap-8 p-6">

                {/* Left Section */}
                <div className="col-span-1 space-y-4">

                    <div className="w-full h-48 rounded-lg border overflow-hidden flex items-center justify-center bg-gray-100">
                        {photo ? (
                            <img
                                src={photo}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-400 text-sm">
                                Photo
                            </span>
                        )}
                    </div>

                    {/* Education */}
                    <div>
                        <h2 className="text-lg font-semibold border-b pb-1">
                            Education & Career
                        </h2>

                        <div className="text-sm mt-2 space-y-1">
                            <p><span className="font-medium">Qualification:</span> {education.qualification}</p>
                            <p><span className="font-medium">Occupation:</span> {education.profession}</p>
                            <p><span className="font-medium">Annual Income:</span> {education.income}</p>
                        </div>
                    </div>

                    {/* Contact */}
                    {!contactSectionHide && <div>
                        <h2 className="text-lg font-semibold border-b pb-1">
                            Contact Details
                        </h2>

                        <div className="text-sm mt-2 space-y-1">
                            <p><span className="font-medium">Mobile Number:</span> {contact.mobile}</p>
                            <p><span className="font-medium">Email:</span> {contact.email}</p>
                            <p><span className="font-medium">Address:</span> {contact.address}</p>
                        </div>
                    </div>}
                </div>

                {/* Right Section */}
                <div className="col-span-2 px-4 space-y-6">

                    <div>
                        <h2 className="font-semibold text-lg border-b pb-1">
                            Personal Details
                        </h2>

                        <div className="text-sm grid mt-2 space-y-1">
                            <p><span className="font-medium">Age:</span> {personal.age}</p>
                            <p><span className="font-medium">Gender:</span> {personal.gender}</p>
                            <p><span className="font-medium">Date of Birth:</span> {personal.dob}</p>
                            <p><span className="font-medium">Height:</span> {personal.height}</p>
                            <p><span className="font-medium">Religion:</span> {personal.religion}</p>
                            <p><span className="font-medium">Caste:</span> {personal.caste}</p>
                            <p><span className="font-medium">Mother Tongue:</span> {personal.motherTongue}</p>
                            <p><span className="font-medium">Marital Status:</span> {personal.maritalStatus}</p>
                            <p><span className="font-medium">City:</span> {personal.city}</p>
                            <p><span className="font-medium">Nationality:</span> {personal.nationality}</p>
                        </div>
                    </div>

                    {/* Family */}
                    <div>
                        <h2 className="text-lg font-semibold border-b pb-1">
                            Family Details
                        </h2>

                        <div className="grid gap-2 text-sm mt-2">
                            <p><span className="font-medium">Father:</span> {family.fatherName}</p>
                            <p><span className="font-medium">Father Occupation:</span> {family.fatherOccupation}</p>
                            <p><span className="font-medium">Mother:</span> {family.motherName}</p>
                            <p><span className="font-medium">Mother Occupation:</span> {family.motherOccupation}</p>
                            <p><span className="font-medium">Family Type:</span> {family.familyType}</p>
                            <p><span className="font-medium">Number of Siblings:</span> {family.siblings}</p>
                            <p><span className="font-medium">Native Place:</span> {family.nativePlace}</p>
                        </div>
                    </div>



                    {/* Horoscope */}
                    {Object.keys(horoscope).length > 0 && <div>
                        <h2 className="text-lg font-semibold border-b pb-1">
                            Horoscope Details
                        </h2>

                        <div className="grid gap-2 text-sm mt-2">
                            <p><span className="font-medium">Rashi:</span> {horoscope.rashi}</p>
                            <p><span className="font-medium">Nakshatra:</span> {horoscope.nakshatra}</p>
                            <p><span className="font-medium">Gothra:</span> {horoscope.gothra}</p>
                            <p><span className="font-medium">Birth Time:</span> {horoscope.birthTime}</p>
                            <p><span className="font-medium">Birth Place:</span> {horoscope.birthPlace}</p>
                        </div>
                    </div>}

                </div>
            </div>

        </div>
    );
}
import { useBioStore } from "@/hooks/useBioStore";

export default function Template2() {
    const { personal, family, education, horoscope, photo, contactSectionHide, contact } = useBioStore();

    return (
        <div className="relative w-[794px] min-h-[1123px] mx-auto bg-linear-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg overflow-hidden p-10">

            {/* FREE VERSION RIBBON */}
            {!localStorage.getItem("token") && (
                <div className="absolute -left-20 top-10 rotate-[-35deg] border-y-4 border-black px-25 py-1 text-lg font-bold tracking-widest bg-white/80 z-10">
                    FREE VERSION
                </div>
            )}

            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold tracking-wide text-fourth">
                    Marriage Biodata
                </h1>
                <div className="mt-2 h-1 w-24 bg-fourth/90 mx-auto rounded-full"></div>
            </div>

            {/* Photo + Basic Info */}
            <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow mb-6">
                {photo ? (
                    <img
                        src={photo}
                        alt="profile"
                        className="w-40 h-40 rounded-xl object-cover border-4 border-purple-300 shadow"
                    />
                ) : (
                    <div className="w-40 h-40 rounded-xl bg-gray-200 flex justify-center items-center">
                        Photo
                    </div>
                )}

                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {personal.name ?? "Name"}
                    </h2>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-3 text-dark">
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
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-xl shadow mb-6">
                <h3 className="text-xl font-semibold text-fourth mb-3">
                    Education & Profession
                </h3>

                <div className="grid gap-2 text-dark">
                    <p><span className="font-medium">Highest Qualification:</span> {education.qualification}</p>
                    <p><span className="font-medium">Profession:</span> {education.profession}</p>
                    <p><span className="font-medium">Income:</span> {education.income}</p>
                </div>
            </div>

            {/* Family */}
            <div className="bg-white p-6 rounded-xl shadow mb-6">
                <h3 className="text-xl font-semibold text-fourth mb-3">
                    Family Details
                </h3>

                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-dark">
                    <p><span className="font-medium">Father:</span> {family.fatherName}</p>
                    <p><span className="font-medium">Father Occupation:</span> {family.fatherOccupation}</p>
                    <p><span className="font-medium">Mother:</span> {family.motherName}</p>
                    <p><span className="font-medium">Mother Occupation:</span> {family.motherOccupation}</p>
                    <p><span className="font-medium">Family Type:</span> {family.familyType}</p>
                    <p><span className="font-medium">Native Place:</span> {family.nativePlace}</p>
                    <p><span className="font-medium">Siblings:</span> {family.siblings}</p>
                </div>
            </div>

            {/* Horoscope */}
            {Object.keys(horoscope).length > 0 && (
                <div className="bg-white p-6 rounded-xl shadow mb-6">
                    <h3 className="text-xl font-semibold text-fourth mb-3">
                        Horoscope Details
                    </h3>

                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-dark">
                        {horoscope.rashi && <p><span className="font-medium">Rashi:</span> {horoscope.rashi}</p>}
                        {horoscope.nakshatra && <p><span className="font-medium">Nakshatra:</span> {horoscope.nakshatra}</p>}
                        {horoscope.gothra && <p><span className="font-medium">Gothra:</span> {horoscope.gothra}</p>}
                        {horoscope.birthTime && <p><span className="font-medium">Birth Time:</span> {horoscope.birthTime}</p>}
                        {horoscope.birthPlace && <p><span className="font-medium">Birth Place:</span> {horoscope.birthPlace}</p>}
                    </div>
                </div>
            )}

            {/* Contact */}
            {!contactSectionHide && (
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold text-fourth mb-3">
                        Contact Details
                    </h3>

                    <div className="grid gap-y-2 text-dark">
                        <p><span className="font-medium">Mobile Number:</span> {contact.mobile}</p>
                        <p><span className="font-medium">Email:</span> {contact.email}</p>
                        <p><span className="font-medium">Address:</span> {contact.address}</p>
                    </div>
                </div>
            )}

            {/* Website watermark */}
            {!localStorage.getItem("token") && (
                <span className="absolute bottom-2 left-2 font-bold">
                    ShaadiBio.com
                </span>
            )}
        </div>
    );
}
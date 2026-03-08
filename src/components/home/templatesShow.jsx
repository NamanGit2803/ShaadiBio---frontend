import React from 'react'

const TemplatesShow = () => {
    return (
        <section className="max-w-6xl mx-auto mt-24 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Beautiful Templates</h2>

            <div className="grid md:grid-cols-2 gap-10">

                <div className="w-full h-[620px]">
                    <img
                        src="./template1.png"
                        alt="Template 1"
                        className="w-full h-full object-fill rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    />
                </div>

                <div className="w-full h-[620px]">
                    <img
                        src="./template2.png"
                        alt="Template 2"
                        className="w-full h-full object-fill rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    />
                </div>

            </div>
        </section>
    )
}

export default TemplatesShow
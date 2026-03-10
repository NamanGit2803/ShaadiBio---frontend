const UploadImage = async (file) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "smdmkknb");

    const res = await fetch(
        "https://api.cloudinary.com/v1_1/dowvol1xg/image/upload",
        {
            method: "POST",
            body: formData
        }
    );

    const data = await res.json();
    return data.secure_url;
};

export default UploadImage
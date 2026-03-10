import { useState } from "react";
import { useBioStore } from "@/hooks/useBioStore";
import UploadImage from "@/lib/imageUpload";
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner";

export default function ProfilePhoto() {
    const { photo, setPhoto } = useBioStore();
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    };

    const handleUpload = async () => {
        if (!file) return;

        try {
            setLoading(true);

            const url = await UploadImage(file); // upload to cloudinary
            setPhoto(url); // save cloudinary URL in store

            setPreview(null);
            setFile(null);
            toast.success("Photo uploaded successfully!")
        } catch (error) {
            console.error("Upload failed", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">

            {/* Select Photo */}
            <label className="cursor-pointer border px-4 py-2 rounded-lg">
                Select Photo
                <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={loading}
                />
            </label>

            {/* Preview */}
            {(preview || photo) && (
                <img
                    src={preview || photo}
                    alt="preview"
                    className="w-40 h-40 rounded-full object-cover border"
                />
            )}

            {/* Upload Button */}
            {file && (
                <Button
                    onClick={handleUpload}
                    disabled={loading}
                    className='bg-third hover:bg-fourth hover:cursor-pointer'
                >
                    {loading ? <><Spinner/> Uploading...</> : "Upload Photo"}
                </Button>
            )}
        </div>
    );
}
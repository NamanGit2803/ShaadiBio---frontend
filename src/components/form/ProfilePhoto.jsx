import { useBioStore } from "@/hooks/useBioStore";

export default function ProfilePhoto() {
    const { photo, setPhoto } = useBioStore();

    return (
        <div className="flex flex-col items-center gap-3">
            <label className="cursor-pointer border p-3 rounded-lg">
                Upload Photo
                <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
                />
            </label>

            {photo && (
                <img
                    src={photo}
                    alt="preview"
                    className="w-40 h-40 rounded-full object-cover"
                />
            )}
        </div>
    );
}
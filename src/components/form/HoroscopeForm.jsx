import { useForm } from "react-hook-form";
import { useBioStore } from "@/hooks/useBioStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function HoroscopeForm({ setStep }) {
    const {setHoroscope, horoscope} = useBioStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: horoscope
    });

    const onSubmit = (data) => {
        setHoroscope(data);

        toast.success("Horoscope details saved successfully!")

        setStep((prev) => prev + 1)
    };

    return (
        <Card>
            <CardContent className="space-y-6 p-6">
                <h2 className="text-xl font-semibold">
                    Horoscope Details (Optional)
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >

                    {/* Rashi */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Rashi
                        </label>

                        <Input
                            {...register("rashi")}
                            placeholder="Example: Aries"
                            className='capitalize'
                        />
                    </div>

                    {/* Nakshatra */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Nakshatra
                        </label>

                        <Input
                            {...register("nakshatra")}
                            placeholder="Example: Ashwini"
                            className='capitalize'
                        />
                    </div>

                    {/* Gothra */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Gothra
                        </label>

                        <Input
                            {...register("gothra")}
                            placeholder="Enter gothra"
                            className='capitalize'
                        />
                    </div>

                    {/* Birth Time */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Birth Time
                        </label>

                        <Input
                            type="time"
                            {...register("birthTime")}
                        />
                    </div>

                    {/* Birth Place */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Birth Place
                        </label>

                        <Input
                            {...register("birthPlace")}
                            placeholder="Enter birth place"
                            className='capitalize'
                        />
                    </div>

                    <Button className="w-full" type="submit">
                        Save & Continue
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}
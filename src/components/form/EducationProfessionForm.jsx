import { useForm } from "react-hook-form";
import { useBioStore } from "@/hooks/useBioStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function EducationProfessionForm({ setStep }) {
    const  {setEducation, education}  = useBioStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: education
    });

    const onSubmit = (data) => {
        setEducation(data);

        toast.success("Education details saved successfully!")

        setStep((prev) => prev + 1)
    };

    return (
        <Card>
            <CardContent className="space-y-6 p-6">
                <h2 className="text-xl font-semibold">
                    Education & Profession
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >

                    {/* Highest Qualification */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Highest Qualification
                        </label>

                        <Input
                            {...register("qualification", {
                                required: "Qualification is required",
                                minLength: {
                                    value: 2,
                                    message: "Qualification must be at least 2 characters",
                                },
                            })}
                            placeholder="Example: B.Tech, MBA"
                            className='capitalize'
                        />

                        {errors.qualification && (
                            <p className="text-sm text-red-500">
                                {errors.qualification.message}
                            </p>
                        )}
                    </div>

                    {/* Profession */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Profession
                        </label>

                        <Input
                            {...register("profession", {
                                required: "Profession is required",
                            })}
                            placeholder="Example: Software Engineer"
                            className='capitalize'
                        />

                        {errors.profession && (
                            <p className="text-sm text-red-500">
                                {errors.profession.message}
                            </p>
                        )}
                    </div>

                    {/* Annual Income */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Annual Income
                        </label>

                        <Input
                            {...register("income", {
                                required: "Income is required",
                            })}
                            placeholder="Enter your income"
                        />

                        {errors.income && (
                            <p className="text-sm text-red-500">
                                {errors.income.message}
                            </p>
                        )}
                    </div>

                    <Button className="w-full" type="submit">
                        Save & Continue
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}
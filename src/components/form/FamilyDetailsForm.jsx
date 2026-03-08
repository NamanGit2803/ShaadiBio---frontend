import { useForm } from "react-hook-form";
import { useBioStore } from "@/hooks/useBioStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function FamilyDetailsForm({ setStep }) {
    const  {setFamily, family}  = useBioStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: family
    });

    const onSubmit = (data) => {
        setFamily(data);

        toast.success("Family details saved successfully!")

        setStep((prev) => prev + 1)
    };

    return (
        <Card>
            <CardContent className="space-y-6 p-6">
                <h2 className="text-xl font-semibold">
                    Family Details
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >

                    {/* Father's Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Father's Name
                        </label>

                        <Input
                            {...register("fatherName", {
                                required: "Father's name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters",
                                },
                            })}
                            className='capitalize'
                            placeholder="Enter father's name"
                        />

                        {errors.fatherName && (
                            <p className="text-sm text-red-500">
                                {errors.fatherName.message}
                            </p>
                        )}
                    </div>

                    {/*Father occupation  */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Father's Occupation
                        </label>

                        <Input
                            {...register("fatherOccupation", {
                                required: "Father's occupation is required",
                            })}
                            placeholder="Enter father's occupation"
                            className='capitalize'
                        />

                        {errors.fatherOccupation && (
                            <p className="text-sm text-red-500">
                                {errors.fatherOccupation.message}
                            </p>
                        )}
                    </div>

                    {/* Mother's Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Mother's Name
                        </label>

                        <Input
                            {...register("motherName", {
                                required: "Mother's name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters",
                                },
                            })}
                            placeholder="Enter mother's name"
                            className='capitalize'
                        />

                        {errors.motherName && (
                            <p className="text-sm text-red-500">
                                {errors.motherName.message}
                            </p>
                        )}
                    </div>

                    {/*Mother occupation  */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Mother's Occupation
                        </label>

                        <Input
                            {...register("motherOccupation", {
                                required: "Mother's occupation is required",
                            })}
                            placeholder="Enter mother's occupation"
                            className='capitalize'
                        />

                        {errors.motherOccupation && (
                            <p className="text-sm text-red-500">
                                {errors.motherOccupation.message}
                            </p>
                        )}
                    </div>

                    {/* Family Type */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Family Type
                        </label>

                        <Input
                            {...register("familyType", {
                                required: "Family type is required",
                            })}
                            placeholder="Joint / Nuclear"
                            className='capitalize'
                        />

                        {errors.familyType && (
                            <p className="text-sm text-red-500">
                                {errors.familyType.message}
                            </p>
                        )}
                    </div>

                    {/* Number of Siblings */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Number of Siblings
                        </label>

                        <Input
                            {...register("siblings", {
                                required: "Please enter number of siblings",
                                min: {
                                    value: 0,
                                    message: "Cannot be negative",
                                },
                            })}
                            placeholder="Enter number of siblings"
                        />

                        {errors.siblings && (
                            <p className="text-sm text-red-500">
                                {errors.siblings.message}
                            </p>
                        )}
                    </div>

                    {/* Native Place */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Native Place
                        </label>

                        <Input
                            {...register("nativePlace", {
                                required: "Native place is required",
                            })}
                            placeholder="Enter native place"
                            className='capitalize'
                        />

                        {errors.nativePlace && (
                            <p className="text-sm text-red-500">
                                {errors.nativePlace.message}
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
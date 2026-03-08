import { useForm } from "react-hook-form";
import { useBioStore } from "@/hooks/useBioStore";
import { differenceInYears } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function PersonalDetailsForm({ setStep }) {
    const { setPersonal, personal } = useBioStore();

    const {
        register,
        watch,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: personal
    });

    useEffect(() => {
        register("gender", {
            required: "Gender is required",
        });

        register("maritalStatus", {
            required: "Marital status is required",
        });

        register("nationality", {
            required: "Nationality is required",
        });
    }, [register]);

    const dob = watch("dob");

    const age = dob
        ? differenceInYears(new Date(), new Date(dob))
        : "";

    const onSubmit = (data) => {
        setPersonal({ ...data, age });


        toast.success("Person details saved successfully!")

        setStep((prev) => prev + 1)
    };

    return (
        <Card>
            <CardContent className="space-y-6 p-6">
                <h2 className="text-xl font-semibold">
                    Personal Details
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >

                    {/* Full Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Full Name
                        </label>

                        <Input
                            {...register("name", {
                                required: "Full name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters",
                                },
                            })}
                            placeholder="Enter your full name"
                            className='capitalize'
                        />

                        {errors.name && (
                            <p className="text-sm text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Gender
                        </label>

                        <RadioGroup
                            onValueChange={(value) => setValue("gender", value, { shouldValidate: true })}
                            className="flex gap-6"
                            value={watch("gender")}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Male" id="male" />
                                <label htmlFor="male">Male</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Female" id="female" />
                                <label htmlFor="female">Female</label>
                            </div>
                        </RadioGroup>

                        {errors.gender && (
                            <p className="text-sm text-red-500">
                                {errors.gender.message}
                            </p>
                        )}
                    </div>


                    {/* Date of Birth */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Date of Birth
                        </label>

                        <Input
                            type="date"
                            {...register("dob", {
                                required: "Date of birth is required",
                                validate: (value) =>
                                    new Date(value) <= new Date() ||
                                    "DOB cannot be in the future",
                            })}
                        />

                        {errors.dob && (
                            <p className="text-sm text-red-500">
                                {errors.dob.message}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-between gap-2">
                        {/* Age */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium">
                                Age
                            </label>

                            <Input
                                value={age || personal.age}
                                readOnly
                                placeholder="Age will auto calculate"
                            />
                        </div>

                        {/* City  */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium">
                                City
                            </label>

                            <Input
                                {...register("city", {
                                    required: "City is required",
                                })}
                                placeholder="Enter your city."
                                className='capitalize'
                            />

                            {errors.city && (
                                <p className="text-sm text-red-500">
                                    {errors.city.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Height */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Height
                        </label>

                        <Input
                            {...register("height", {
                                required: "Height is required",
                            })}
                            placeholder="Example: 5'7 ft"
                        />

                        {errors.height && (
                            <p className="text-sm text-red-500">
                                {errors.height.message}
                            </p>
                        )}
                    </div>

                    {/* Religion */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Religion
                        </label>

                        <Input
                            {...register("religion", {
                                required: "Religion is required",
                            })}
                            placeholder="Enter religion"
                            className='capitalize'
                        />

                        {errors.religion && (
                            <p className="text-sm text-red-500">
                                {errors.religion.message}
                            </p>
                        )}
                    </div>

                    {/* Caste */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Caste
                        </label>

                        <Input
                            {...register("caste", {
                                required: "Caste is required",
                            })}
                            placeholder="Enter caste"
                            className='capitalize'
                        />

                        {errors.caste && (
                            <p className="text-sm text-red-500">
                                {errors.caste.message}
                            </p>
                        )}
                    </div>

                    {/* Mother tounge */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Mother Tongue
                        </label>

                        <Input
                            {...register("motherTongue", {
                                required: "Mother tongue is required",
                            })}
                            placeholder="Enter mother tongue"
                            className='capitalize'
                        />

                        {errors.motherTongue && (
                            <p className="text-sm text-red-500">
                                {errors.motherTongue.message}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-between gap-2">
                        {/* Marital status  */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Marital Status
                            </label>

                            <Select
                                onValueChange={(value) =>
                                    setValue("maritalStatus", value, { shouldValidate: true })
                                }
                                value={watch("maritalStatus")}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select marital status" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="Unmarried">Unmarried</SelectItem>
                                    <SelectItem value="Divorced">Divorced</SelectItem>
                                    <SelectItem value="Widowed">Widowed</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.maritalStatus && (
                                <p className="text-sm text-red-500">
                                    {errors.maritalStatus.message}
                                </p>
                            )}
                        </div>

                        {/* Nationality  */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Nationality
                            </label>

                            <Select
                                onValueChange={(value) =>
                                    setValue("nationality", value, { shouldValidate: true })
                                }
                                value={watch("nationality")}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select nationality" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="Indian">Indian</SelectItem>
                                    <SelectItem value="NRI">NRI</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.nationality && (
                                <p className="text-sm text-red-500">
                                    {errors.nationality.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Save & Continue
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}
import { useForm } from "react-hook-form";
import { useBioStore } from "@/hooks/useBioStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ContactForm({ setStep }) {
    const { setContact, contact, contactSectionHide, setContactSection } = useBioStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: contact
    });

    const onSubmit = (data) => {
        setContact(data);

        toast.success("Contact details saved successfully!")

        setStep((prev) => prev + 1)
    };

    return (
        <Card>
            <CardContent className="space-y-6 p-6">
                <h2 className="text-xl font-semibold">
                    Contact Details
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >

                    {/* Mobile Number */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Mobile Number
                        </label>

                        <Input
                            maxLength={10}
                            type={'tel'}
                            {...register("mobile", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10 digit mobile number",
                                },
                            })}

                            placeholder="Enter mobile number"
                        />

                        {errors.mobile && (
                            <p className="text-sm text-red-500">
                                {errors.mobile.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Email
                        </label>

                        <Input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value:
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            placeholder="Enter email address"
                        />

                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Address */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Address
                        </label>

                        <Input
                            {...register("address", {
                                required: "Address is required",
                                minLength: {
                                    value: 5,
                                    message: "Address must be at least 5 characters",
                                },
                            })}
                            placeholder="Enter address"
                            className='capitalize'
                        />

                        {errors.address && (
                            <p className="text-sm text-red-500">
                                {errors.address.message}
                            </p>
                        )}
                    </div>

                    <Button className="w-full" type="submit">
                        Save & Continue
                    </Button>

                </form>

                <div className="flex gap-2 items-center">
                    <Checkbox id="terms-checkbox" name="terms-checkbox" checked={contactSectionHide} onCheckedChange={(value) => setContactSection(value)}/>
                    <Label htmlFor="terms-checkbox" className='text-dark'>Hide contact details in the biodata?</Label>
                </div>
            </CardContent>
        </Card>
    );
}
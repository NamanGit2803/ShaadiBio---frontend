import api from "@/services/api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthCard from "@/components/auth/AuthCard";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()

    const password = watch("password");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    const onSubmit = async(data) => {
        try {
            setLoading(true)
            const res = await api.post("/api/auth/register", {
                name: data.name,
                email: data.email,
                password: data.password,
            });

            localStorage.setItem('token', res.data.token)

            toast.success(res.data.message);
            setLoading(false)
            navigate('/')
            reset()
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
            setLoading(false)
        }
    };

    return (
        <AuthCard
            title="Create Your Account ✨"
            subtitle="Start building your biodata in minutes"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Name */}
                <div className="space-y-1">
                    <Input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder="Full Name"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                    <Input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div className="space-y-1 relative">
                    <Input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-500"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>

                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-1 relative">
                    <Input
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                    />

                    <button
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-2.5 text-gray-500"
                    >
                        {showConfirmPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>

                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                <Button className="w-full" type="submit" disabled={loading}>
                    {loading ? <><Spinner/> Registering...</> : 'Register'}
                </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-3">
                Already have an account?{" "}
                <Link className="text-fourth font-medium" to="/login">
                    Login
                </Link>
            </p>
        </AuthCard>
    );
}
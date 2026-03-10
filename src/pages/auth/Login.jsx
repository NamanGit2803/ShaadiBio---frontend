import api from "@/services/api";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthCard from "../../components/auth/AuthCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react";
import { toast } from "sonner";

export default function Login() {
    const { register, handleSubmit, reset, } = useForm();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onSubmit = async(data) => {
        try {
            setLoading(true)
            const res = await api.post("/api/auth/login", {
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
            title="Welcome Back 👋"
            subtitle="Login to continue creating your biodata"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    required
                />

                <Input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    required
                />

                <Button className="w-full" type="submit" disabled={loading}>
                    {loading ? <><Spinner/> Logging in...</> : 'Login'}
                </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-3">
                Don’t have an account?{" "}
                <Link className="text-fourth font-medium" to="/register">
                    Register
                </Link>
            </p>
        </AuthCard>
    );
}
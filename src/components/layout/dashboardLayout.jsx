import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarProvider,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarTrigger
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"
import { Home, FileText, Eye } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function DashboardLayout({ children }) {

    return (
        <SidebarProvider>

            <div className="flex min-h-screen w-full">

                {/* Sidebar */}
                <Sidebar>
                    <SidebarContent>

                        <SidebarGroup>
                            <SidebarGroupLabel className='text-third text-2xl font-bold mb-2'><Link to={'/'}>ShaadiBio</Link></SidebarGroupLabel>
                            <Separator className='mb-2'/>

                            <SidebarGroupContent>
                                <SidebarMenu>

                                    <SidebarMenuItem>
                                        <NavLink to="/dashboard/create">
                                            {({ isActive }) => (
                                                <SidebarMenuButton
                                                    className={`py-5 ${isActive ? "bg-third text-muted font-medium hover:bg-third hover:text-muted" : ""}`}
                                                >
                                                    <FileText />
                                                    <span>Create Biodata</span>
                                                </SidebarMenuButton>
                                            )}
                                        </NavLink>
                                    </SidebarMenuItem>

                                    <SidebarMenuItem>
                                        <NavLink to="/dashboard/templates">
                                            {({ isActive }) => (
                                                <SidebarMenuButton
                                                    className={`py-5 ${isActive ? "bg-third text-muted font-medium hover:bg-third hover:text-muted" : ""}`}
                                                >
                                                    <Home />
                                                    <span>Templates</span>
                                                </SidebarMenuButton>
                                            )}
                                        </NavLink>
                                    </SidebarMenuItem>

                                    <SidebarMenuItem>
                                        <NavLink to="/dashboard/preview">
                                            {({ isActive }) => (
                                                <SidebarMenuButton
                                                    className={`py-5 ${isActive ? "bg-third text-muted font-medium hover:bg-third hover:text-muted" : ""}`}
                                                >
                                                    <Eye />
                                                    <span>Preview</span>
                                                </SidebarMenuButton>
                                            )}
                                        </NavLink>
                                    </SidebarMenuItem>

                                </SidebarMenu>
                            </SidebarGroupContent>

                        </SidebarGroup>

                    </SidebarContent>
                </Sidebar>

                {/* Page Content */}
                <main className="flex-1 p-6 bg-custom">

                    {/* Toggle Button */}
                    <SidebarTrigger />

                    {children}
                </main>

            </div>

        </SidebarProvider>
    )
}
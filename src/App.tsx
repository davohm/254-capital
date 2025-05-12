
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Public pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import FAQs from "./pages/FAQs";
import Contacts from "./pages/Contacts";

// Auth pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// Protected pages
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/dashboard/Applications";
import ApplicationDetail from "./pages/dashboard/ApplicationDetail";
import ApplicationEdit from "./pages/dashboard/ApplicationEdit";
import Team from "./pages/dashboard/Team";
import Settings from "./pages/dashboard/Settings";

// Placeholder components for other dashboard pages
const Notifications = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h1>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <p className="text-gray-500">You have no new notifications at this time.</p>
    </div>
  </div>
);

const Support = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h1>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <p className="text-gray-700 mb-4">Need assistance with your account or have questions about our services?</p>
      <p className="text-gray-700 mb-4">Contact our support team:</p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li>Email: support@254capital.com</li>
        <li>Phone: +254 712 345 678</li>
        <li>Hours: Monday-Friday, 8am-5pm EAT</li>
      </ul>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contacts" element={<Contacts />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/applications" element={<Applications />} />
              <Route path="/dashboard/applications/:id" element={<ApplicationDetail />} />
              <Route path="/dashboard/applications/edit/:id" element={<ApplicationEdit />} />
              <Route path="/dashboard/team" element={<Team />} />
              <Route path="/dashboard/notifications" element={<Notifications />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/support" element={<Support />} />
              {/* Add more protected routes here */}
            </Route>
            
            {/* Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

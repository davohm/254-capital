import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Shield, 
  Bell, 
  Save,
  User
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('company');
  
  // Sample company data
  const companyData = {
    name: '254 Capital',
    logo: '/254-capital-logo.jpg',
    address: 'Westlands Business Park, Nairobi',
    phone: '+254 712 345 678',
    email: 'info@254capital.com',
    website: 'www.254capital.com',
    description: 'Providing innovative financial solutions for businesses across East Africa.'
  };

  const tabs = [
    { id: 'company', label: 'Company Profile', icon: <Building size={18} /> },
    { id: 'account', label: 'Account Settings', icon: <User size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'security', label: 'Security', icon: <Shield size={18} /> }
  ];

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account and application settings</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 p-4 border-r border-gray-200">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#48A7A7]/10 text-[#48A7A7] border-l-4 border-[#48A7A7]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {activeTab === 'company' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Company Profile</h2>
                
                <div className="space-y-6">
                  {/* Company Logo */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Logo
                    </label>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-16 w-16 bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src={companyData.logo} 
                          alt="Company logo" 
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <Button className="ml-5 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md px-4 py-2 text-sm">
                        Change
                      </Button>
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company-name"
                      defaultValue={companyData.name}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                    />
                  </div>

                  {/* Company Description */}
                  <div>
                    <label htmlFor="company-description" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Description
                    </label>
                    <textarea
                      id="company-description"
                      rows={3}
                      defaultValue={companyData.description}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="company-email"
                          defaultValue={companyData.email}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="company-phone"
                          defaultValue={companyData.phone}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Globe size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="url"
                          id="company-website"
                          defaultValue={companyData.website}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company-address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="company-address"
                          defaultValue={companyData.address}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white rounded-md px-4 py-2 text-sm transition-all duration-200 ease-in-out hover:shadow-md flex items-center space-x-2">
                      <Save size={16} />
                      <span>Save Changes</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'account' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h2>
                <p className="text-gray-500">Manage your account preferences and personal information.</p>
                
                {/* Placeholder content for account settings */}
                <div className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="user-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="user-name"
                      defaultValue="Admin User"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="user-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="user-email"
                      defaultValue="admin@254capital.com"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                    />
                  </div>
                  <div className="pt-4">
                    <Button className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white rounded-md px-4 py-2 text-sm transition-all duration-200 ease-in-out hover:shadow-md flex items-center space-x-2">
                      <Save size={16} />
                      <span>Save Changes</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h2>
                <p className="text-gray-500">Manage how you receive notifications.</p>
                
                {/* Placeholder content for notification settings */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-notifications"
                        name="email-notifications"
                        type="checkbox"
                        defaultChecked
                        className="focus:ring-[#48A7A7] h-4 w-4 text-[#48A7A7] border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email-notifications" className="font-medium text-gray-700">Email Notifications</label>
                      <p className="text-gray-500">Receive email notifications about loan applications and account updates.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="sms-notifications"
                        name="sms-notifications"
                        type="checkbox"
                        className="focus:ring-[#48A7A7] h-4 w-4 text-[#48A7A7] border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="sms-notifications" className="font-medium text-gray-700">SMS Notifications</label>
                      <p className="text-gray-500">Receive SMS alerts for important updates and approvals.</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white rounded-md px-4 py-2 text-sm transition-all duration-200 ease-in-out hover:shadow-md flex items-center space-x-2">
                      <Save size={16} />
                      <span>Save Preferences</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h2>
                <p className="text-gray-500">Manage your account security and password.</p>
                
                {/* Placeholder content for security settings */}
                <div className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm"
                    />
                  </div>
                  <div className="pt-4">
                    <Button className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white rounded-md px-4 py-2 text-sm transition-all duration-200 ease-in-out hover:shadow-md flex items-center space-x-2">
                      <Save size={16} />
                      <span>Update Password</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

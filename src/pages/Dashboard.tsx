import React from 'react';
import { Button } from "@/components/ui/button";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { 
  FileText, 
  DollarSign, 
  CreditCard, 
  Clock, 
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {

  const dashboardCards = [
    {
      title: 'Active Loans',
      value: '2',
      icon: <CreditCard className="h-8 w-8 text-[#48A7A7]" />,
      description: 'Current active financing',
      link: '#',
    },
    {
      title: 'Available Credit',
      value: 'KES 5,000,000',
      icon: <DollarSign className="h-8 w-8 text-[#48A7A7]" />,
      description: 'Remaining credit limit',
      link: '#',
    },
    {
      title: 'Pending Applications',
      value: '1',
      icon: <Clock className="h-8 w-8 text-[#48A7A7]" />,
      description: 'Applications in progress',
      link: '#',
    },
    {
      title: 'Documents',
      value: '5',
      icon: <FileText className="h-8 w-8 text-[#48A7A7]" />,
      description: 'Uploaded documents',
      link: '#',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'Application Submitted',
      description: 'Supply Chain Financing - KES 2,000,000',
      date: '2 hours ago',
      status: 'pending',
    },
    {
      id: 2,
      type: 'Loan Approved',
      description: 'Bridging Loan - KES 1,500,000',
      date: '3 days ago',
      status: 'approved',
    },
    {
      id: 3,
      type: 'Payment Made',
      description: 'Invoice #INV-2023-005 - KES 500,000',
      date: '1 week ago',
      status: 'completed',
    },
  ];



  return (
    <DashboardLayout>
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">{card.title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{card.value}</h3>
                    <p className="text-gray-500 text-sm mt-2">{card.description}</p>
                  </div>
                  <div className="bg-[#48A7A7]/10 p-3 rounded-full">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{activity.type}</h3>
                          <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
                          <p className="text-gray-400 text-xs mt-1">{activity.date}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                          activity.status === 'approved' ? 'bg-green-100 text-green-800' : 
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <Button 
                    className="text-[#48A7A7] hover:text-[#48A7A7]/80 bg-transparent hover:bg-[#48A7A7]/10 transition-colors duration-200"
                  >
                    View All Activity
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white rounded-md px-4 py-3 text-sm transition-all duration-200 ease-in-out hover:shadow-md flex items-center justify-center space-x-2"
                  >
                    <DollarSign size={16} />
                    <span>Apply for Financing</span>
                  </Button>
                  
                  <Button 
                    className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-md px-4 py-3 text-sm transition-all duration-200 ease-in-out hover:shadow-sm flex items-center justify-center space-x-2"
                  >
                    <FileText size={16} />
                    <span>Upload Documents</span>
                  </Button>
                  
                  <Button 
                    className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-md px-4 py-3 text-sm transition-all duration-200 ease-in-out hover:shadow-sm flex items-center justify-center space-x-2"
                  >
                    <ArrowRight size={16} />
                    <span>Update Profile</span>
                  </Button>
                  
                  <Button 
                    className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-md px-4 py-3 text-sm transition-all duration-200 ease-in-out hover:shadow-sm flex items-center justify-center space-x-2"
                  >
                    <ArrowRight size={16} />
                    <span>Account Settings</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
    </DashboardLayout>
  );
};

export default Dashboard;

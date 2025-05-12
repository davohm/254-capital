import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Plus, Filter, Search, Eye, Edit } from 'lucide-react';
import DashboardLayout from "../../components/dashboard/DashboardLayout";

const Applications = () => {
  // Sample loan application data
  const applications = [
    {
      id: 'APP-001',
      applicant: 'John Doe',
      loanType: 'Supply Chain Financing',
      amount: 'KES 2,000,000',
      date: '2025-05-10',
      status: 'pending'
    },
    {
      id: 'APP-002',
      applicant: 'Jane Smith',
      loanType: 'Bridging Loan',
      amount: 'KES 1,500,000',
      date: '2025-05-08',
      status: 'approved'
    },
    {
      id: 'APP-003',
      applicant: 'David Kamau',
      loanType: 'Salary Check-off Loan',
      amount: 'KES 500,000',
      date: '2025-05-05',
      status: 'rejected'
    },
    {
      id: 'APP-004',
      applicant: 'Sarah Wanjiku',
      loanType: 'LPO Financing',
      amount: 'KES 3,200,000',
      date: '2025-05-01',
      status: 'approved'
    },
    {
      id: 'APP-005',
      applicant: 'Michael Omondi',
      loanType: 'Invoice Discounting',
      amount: 'KES 750,000',
      date: '2025-04-28',
      status: 'pending'
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Loan Applications</h1>
          <p className="text-gray-500 mt-1">Manage and review loan applications</p>
        </div>
        <Button className="bg-[#48A7A7] hover:bg-[#48A7A7]/90 text-white rounded-md px-4 py-2 text-sm transition-all duration-200 ease-in-out hover:shadow-md flex items-center space-x-2">
          <Plus size={16} />
          <span>New Application</span>
        </Button>
      </div>

      {/* Search and filter */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search applications..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] transition duration-150 ease-in-out text-sm"
            />
          </div>
          <div className="flex space-x-2">
            <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md px-4 py-2 text-sm transition-all duration-200 ease-in-out hover:shadow-sm flex items-center space-x-2">
              <Filter size={16} />
              <span>Filter</span>
            </Button>
            <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#48A7A7] focus:border-[#48A7A7] sm:text-sm rounded-md">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applications table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Application ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicant
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loan Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#48A7A7]">
                    <Link to={`/dashboard/applications/${application.id}`} className="hover:underline">
                      {application.id}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.applicant}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {application.loanType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {application.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      application.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/dashboard/applications/${application.id}`} className="text-[#48A7A7] hover:text-[#48A7A7]/80 mr-3">
                      View
                    </Link>
                    <button className="text-gray-500 hover:text-gray-700">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md px-4 py-2 text-sm">
              Previous
            </Button>
            <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md px-4 py-2 text-sm ml-3">
              Next
            </Button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                <span className="font-medium">5</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <Button className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-2 py-2 rounded-l-md text-sm font-medium">
                  Previous
                </Button>
                <Button className="bg-[#48A7A7] text-white hover:bg-[#48A7A7]/90 relative inline-flex items-center px-4 py-2 text-sm font-medium">
                  1
                </Button>
                <Button className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-2 py-2 rounded-r-md text-sm font-medium">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Applications;

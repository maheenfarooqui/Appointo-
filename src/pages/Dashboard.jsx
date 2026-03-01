import { useAuth } from '../context/AuthContext';
import { supabase } from '../api/supabase';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Dashboard = () => {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-bgLight text-slate-800 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center bg-surface p-8 rounded-3xl shadow-sm border border-slate-100 mb-10">
          <div className="flex items-center gap-6">
            
            <div>
              <img src={logo} alt="Logo" className="w-60 object-contain" />
              <p className="text-slate-500 font-medium">
                Welcome back, <span className="text-primary font-semibold">{profile?.full_name || 'User'}</span>
              </p>
            </div>
          </div>
          
          <button 
            onClick={signOut}
            className="cursor-pointer mt-6 md:mt-0 text-slate-400 hover:text-red-500 font-medium transition-colors"
          >
            Logout
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-accent transition-all">
            <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Account Role</h3>
            <p className="text-3xl font-black text-primary capitalize">{profile?.role || 'user'}</p>
          </div>

          <div className="bg-surface p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Status</h3>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
              <p className="text-3xl font-black text-slate-800">Active</p>
            </div>
          </div>
        </div>

        {/* Admin Actions */}
        {profile?.role === 'admin' && (
          <div className="mt-12 bg-primary p-10 rounded-[2rem] shadow-xl text-center text-white overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Admin Control Center</h2>
              <p className="text-teal-100 mb-8 max-w-md mx-auto">You have full access to manage services, appointments, and staff members.</p>
              <button className="bg-accent hover:bg-white text-primary font-black px-10 py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1">
                + Add New Service
              </button>
            </div>
            {/* Design Element: Abstract Circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
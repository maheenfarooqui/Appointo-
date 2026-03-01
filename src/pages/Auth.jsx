import { useState } from 'react';
import { supabase } from '../api/supabase';
import { useNavigate } from 'react-router-dom';
import logoIcon from '../assets/icon.png'; // <--- Logo check kar lena

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // Signup: Email, Password aur Full Name bhej rahe hain
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName }, // Ye metadata hamare SQL trigger ke liye hy
          },
        });
        if (error) throw error;
        alert('Account created! Please login.');
        setIsSignUp(false);
      } else {
        // Login Logic
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/dashboard');
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-6 font-sans">
      {/* Main Card */}
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl shadow-teal-900/5 p-10 border border-slate-100 relative overflow-hidden">
        
    
       

        {/* Logo & Header */}
        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-[#00796B]/5 rounded-3xl mb-4">
            <img src={logoIcon} alt="Appointo" className="w-16 h-16 object-contain" />
          </div>
          <h2 className="text-3xl font-black text-[#00796B] tracking-tight">Appointo</h2>
          <p className="text-slate-400 font-medium mt-1">
            {isSignUp ? 'Join the professional network' : 'Welcome back, professional'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-5">
          {isSignUp && (
            <div>
              <label className="block text-xs font-bold text-[#00796B] uppercase tracking-widest mb-2 ml-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-5 py-4 bg-[#F5F5F5] border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#00796B] focus:border-transparent outline-none transition-all text-slate-800 placeholder:text-slate-300"
                placeholder="Dr. Sarah Khan"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#00796B] uppercase tracking-widest mb-2 ml-1">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-5 py-4 bg-[#F5F5F5] border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#00796B] focus:border-transparent outline-none transition-all text-slate-800 placeholder:text-slate-300"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#00796B] uppercase tracking-widest mb-2 ml-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-5 py-4 bg-[#F5F5F5] border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#00796B] focus:border-transparent outline-none transition-all text-slate-800 placeholder:text-slate-300"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full bg-[#00796B] hover:bg-[#006054] text-white font-black py-5 rounded-2xl shadow-lg shadow-teal-900/20 transition-all transform active:scale-[0.98] disabled:opacity-50 mt-4"
          >
            {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        {/* Toggle Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="cursor-pointer text-sm font-bold text-[#00796B] hover:text-[#80CBC4] transition-colors"
          >
            {isSignUp ? 'Already have an account? Log In' : "New to Appointo? Create an Account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
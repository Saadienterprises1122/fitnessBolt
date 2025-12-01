import type { SignupFormProps } from './ContactTypes';

const SignupForm: React.FC<SignupFormProps> = ({ className = '' }) => {
    return (
        <div id="join" className={`bg-white p-8 md:p-12 rounded-3xl text-brand-black shadow-2xl ${className}`}>
            <h3 className="text-3xl font-black mb-2 uppercase">Start Your Journey</h3>
            <p className="text-gray-600 mb-8">First session is on us. No commitment.</p>

            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                        <input type="text" className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-black" />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                        <input type="text" className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-black" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                    <input type="email" className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-black" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-black" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Goal</label>
                    <select className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-black">
                        <option>Weight Loss</option>
                        <option>Muscle Gain</option>
                        <option>Endurance</option>
                        <option>General Health</option>
                    </select>
                </div>

                <button type="button" className="w-full bg-brand-black text-white font-black uppercase py-4 rounded-lg hover:bg-brand-yellow hover:text-brand-black transition-colors mt-4">
                    Claim Free Pass
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
            </form>
        </div>
    );
};

export default SignupForm;

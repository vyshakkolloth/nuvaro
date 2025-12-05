
import { Smartphone } from 'lucide-react';

const ScreenRestriction = () => {
    return (
        <div className="fixed inset-0 z-9999 bg-[#111827] text-white flex flex-col items-center justify-center p-8 text-center lg:hidden">
            <div className="bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm">
                <Smartphone size={48} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Desktop Experience Only
            </h2>
            <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed">
                This website is optimized for larger screens. <br />
                It is not available on mobile or tablet devices at the moment.
            </p>
        </div>
    );
};

export default ScreenRestriction;

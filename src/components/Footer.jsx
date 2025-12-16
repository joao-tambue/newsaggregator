import { ArrowRight } from "lucide-react";

const Footer = () => {

    return (
        <div className={`p-4 text-white`}>
            <footer className=" text-black py-8 border-t border-black text-center">
                <h2 className="title-mochiy text-[18px] font-bold mb-4">Newsletter</h2>

                {/* <div className="relative w-full">
                    <input
                        type="email"
                        placeholder="Email Address..."
                        className="border border-black px-4 py-4 rounded-md w-72"
                    />
                    <ArrowRight size={20} className="absolute right-5 top-5" />
                </div> */}

                <div className="relative max-w-[360px] mx-auto w-full mt-[35px] mb-[32px]">
                    <input
                        type="email"
                        placeholder="Email address..."
                        className="border-2 border-black px-4 py-4 w-full"
                    />
                    <ArrowRight className="absolute right-2 top-5" size={18} />
                </div>

                <div className="flex justify-center gap-6 mt-4 text-gray-600">
                    <a href="#" className="hover:underline">LinkedIn</a>
                    <a href="https://github.com/joao-tambue" className="hover:underline">GitHub</a>
                    <a href="#" className="hover:underline">Instagram</a>
                </div>

                <p className="text-sm mt-4 text-gray-500">
                    &copy; {new Date().getFullYear()} João Tambue. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;

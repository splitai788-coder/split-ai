'use client';

const Header = () =>{
    return (
        <header className="absolute top-0 left-0 w-full z-10 p-6 bg-transparent">
            <nav className="flex items-center justify-between max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-white">Split AI</h1>
                <button className="bg-white text-gray-900 font-semibold py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors">
                    Get Started
                </button>
            </nav>
        </header>
    );
};

export default Header;
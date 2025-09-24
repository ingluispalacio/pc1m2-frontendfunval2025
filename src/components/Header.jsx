function Header({ dark, setDark }) {
    return (
        <header className="relative w-full py-4 md:py-8 text-gray-900 dark:text-white text-center flex flex-col md:flex-row items-center md:items-start justify-between  gap-4">
            <h1 className="text-xl font-bold w-full text-start md:text-2xl lg:text-3xl ">The creative crew</h1>
            <div className="flex flex-col items-start py-4 px-4 md:py-0 md:px-0 text-left">
                <label className="text-sm font-bold">Who we are</label>
                <label className="text-sm ">We are a team of creative, diverse, driven individuals, innovating from different locations around the world.</label>
            </div>
           
            <button
                onClick={() => setDark(!dark)}
                className="absolute top-4 right-4 p-1 cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
            >
                {dark ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                }
            </button>
        </header>
    );
}

export default Header;

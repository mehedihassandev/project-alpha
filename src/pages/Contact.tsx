import React from "react";

export const Contact = () => {
    return (
        <section className="max-w-screen-2xl h-screen grid grid-cols-2 items-center justify-around px-20 py-10">
            <div className="text-textColor">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl font-poppins">
                    Get a quote
                </h1>

                <p className="max-w-xl mt-6 font-syne text-lg">
                    Ask us everything and we would love to hear from you
                </p>

                <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-start -mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mx-2 text-secondary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>

                        <span className="mx-2 text-textColor font-syne truncate w-72 text-md">
                            Dhaka, Bangladesh
                        </span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mx-2 text-secondary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>

                        <span className="mx-2 truncate w-72 text-textColor font-syne text-md">
                            (880) 1571345727
                        </span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mx-2 text-secondary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>

                        <span className="mx-2 truncate w-72 text-textColor font-syne text-md">
                            mh.web.mehedihassan@gmail.com
                        </span>
                    </p>
                </div>
            </div>

            <div className="w-full px-8 py-5 pb-10 mx-auto overflow-hidden bg-white rounded-xl dark:bg-gray-900">
                <form className="mt-4">
                    <div className="flex-1">
                        <label className="block mb-2 text-md text-textColor font-syne">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-secondary focus:border-secondary focus:ring-secondary focus:ring-opacity-40 dark:focus:border-secondary focus:outline-none focus:ring font-syne"
                        />
                    </div>

                    <div className="flex-1 mt-6">
                        <label className="block mb-2 text-md text-textColor font-syne">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="johndoe@example.com"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-secondary focus:border-secondary focus:ring-secondary focus:ring-opacity-40 dark:focus:border-secondary focus:outline-none focus:ring font-syne"
                        />
                    </div>

                    <div className="w-full mt-6">
                        <label className="block mb-2 text-md text-textColor font-syne">
                            Message
                        </label>
                        <textarea
                            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-secondary rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-secondary focus:border-secondary focus:ring-secondary focus:ring-opacity-40 dark:focus:border-secondary focus:outline-none focus:ring font-syne"
                            placeholder="Message"
                        ></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 font-poppins">
                        get in touch
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

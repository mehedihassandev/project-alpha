import { iconHash } from "../../utils/icon/icons";
import data from "../../data.json";

export const Contact = () => {
    const { contacts } = data;

    const handleMailToClick = (e) => {
        e.preventDefault();
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mh.web.mehedihassan@gmail.com', '_blank');
    };

    return (
        <section className="max-w-screen-2xl h-full lg:h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-around px-14 py-10 gap-5">
            <div className="text-textColor">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl font-saira">
                    Let&apos;s get in touch?
                </h1>

                <p className="max-w-xl mt-6 font-syne text-lg">
                    Ready to collaborate or chat about web development? I’m always open to connecting with fellow developers and enthusiasts. Feel free to reach out!
                </p>


                <div className="mt-6 space-y-8 md:mt-8">
                    {contacts.map((item, index) => (
                        <div key={index} className="flex items-center ml-2 gap-2 text-secondary">
                            {iconHash[item.icon]}
                            <h2
                                className={`mx-2 text-textColor font-syne text-md ${item.isLink && 'cursor-pointer'}`}
                                onClick={handleMailToClick}
                            >
                                {item.text}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className="box rounded-xl">
                <div className=" w-full px-8 py-5 pb-10 mx-auto overflow-hidden bg-primary rounded-xl">
                    <form className="mt-4 w-full">
                        <div className="flex-1">
                            <label className="block mb-2 text-md text-textColor font-syne">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 border rounded-md bg-gray-900 border-secondary focus:border-secondary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring font-syne"
                            />
                        </div>
                        <div className="flex-1 mt-6">
                            <label className="block mb-2 text-md text-textColor font-syne">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="johndoe@example.com"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 border rounded-md bg-gray-900 border-secondary focus:border-secondary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring font-syne"
                            />
                        </div>
                        <div className="w-full mt-6">
                            <label className="block mb-2 text-md text-textColor font-syne">
                                Message
                            </label>
                            <textarea
                                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-secondary rounded-md md:h-48 bg-gray-900 focus:border-secondary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring font-syne"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 font-poppins">
                            get in touch
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

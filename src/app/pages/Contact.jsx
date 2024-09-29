import { iconHash } from "../../../utils/icon/icons";
import ContactForm from "../components/ContactForm";
import { contacts } from "../constant/contacts";

export const Contact = () => {
  const handleMailToClick = (e) => {
    e.preventDefault();
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mh.web.mehedihassan@gmail.com",
      "_blank",
    );
  };

  return (
    <section className="max-w-screen-2xl h-full lg:h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-around px-14 py-10 gap-5">
      <div className="text-textColor">
        <h1 className="text-2xl font-semibold capitalize lg:text-3xl font-saira">
          Let&apos;s get in touch?
        </h1>

        <p className="max-w-xl mt-6 font-syne text-lg">
          Ready to collaborate or chat about web development? I’m always open to
          connecting with fellow developers and enthusiasts. Feel free to reach
          out!
        </p>

        <div className="mt-6 space-y-8 md:mt-8">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="flex items-center ml-2 gap-2 text-secondary"
            >
              {iconHash[item.icon]}
              <h2
                className={`mx-2 text-textColor font-syne text-md ${item.isLink && "cursor-pointer"}`}
                onClick={handleMailToClick}
              >
                {item.text}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default Contact;

import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { LINK } from '../navigator/route-constant';

export const NotFound = () => {
  return ReactDOM.createPortal(
    <section className="page_404 fixed inset-0 z-50 py-10 bg-white font-serif">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-full max-w-lg text-center">
          <div
            className="four_zero_four_bg bg-center bg-cover h-[400px] w-full flex justify-center items-center"
            style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)' }}
          >
          </div>

          <div className="content_box_404 mt-[-50px]">
            <h1 className="text-7xl font-poppins font-bold -tracking-tighter pb-5 text-gray-800">404</h1>
            <h3 className="text-4xl font-semibold font-sans">
              Looks like you&apos;re lost
            </h3>

            <p className="text-lg mt-2 font-serif text-gray-600">The page you are looking for is not available!</p>

            <Link to={LINK.HOME} className="link_404 text-white py-2 px-4 bg-primary mt-5 inline-block">Go to Home</Link>
          </div>
        </div>
      </div>
    </section>,
    document.body
  );
};

export default NotFound;

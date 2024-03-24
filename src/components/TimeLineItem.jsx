import PropTypes from "prop-types";

export const TimelineItem = ({ title, date, description }) => {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
      <time className="text-xs tracking-wide uppercase dark:text-gray-600">
        {date}
      </time>
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <p className="mt-3">{description}</p>
    </div>
  );
};

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

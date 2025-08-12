function TeamCard(props) {
  return (
    <div className="relative">
      <div>
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-auto object-cover"
        />
      </div>

      <div>
        <span className="absolute top-[10%] right-[-2rem] rotate-90 text-sm font-semibold tracking-widest text-gray-700 dark:text-gray-500">
          {props.role ? props.role.toUpperCase() : ""}{" "}
        </span>
        {/* <span className="absolute left-[-2rem] bottom-[10%] -rotate-90 text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-300 transform origin-left">
          {props.role ? props.role.toUpperCase() : ""}
        </span> */}
      </div>

      <div>
        <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
          {props.name}
        </h3>
      </div>
    </div>
  );
}

export default TeamCard;

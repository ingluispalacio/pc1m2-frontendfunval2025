
function CardUser({ user, index }) {
  const base = "relative w-full h-64 md:h-80 lg:h-112 xl:h-212";
  const mobileMt = index % 2 !== 0 ? "mt-12" : "";      
  const mdOverride = index % 3 === 1 ? "md:mt-12" : "md:mt-0"; 

  const classNameCard = [base, mobileMt, mdOverride].filter(Boolean).join(" ");
  return (
    <div
      key={index}
      className={classNameCard} 
    >
      <img
        src={user.img}
        alt={user.name}
        className="w-[90%] h-[90%] object-cover"
      />
      <div className="absolute top-0 right-0 w-[10%] h-[90%] ">
        <p className="text-gray-900 dark:text-white text-xs md:text-sm lg:text-lg  [writing-mode:vertical-lr]">
          {user.rol}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[10%]">
        <h2 className="text-sm md:text-xl lg:text-2xl  font-bold text-gray-900 dark:text-white">{user.name}</h2>
      </div>
        {/* <p className="text-sm text-gray-500 dark:text-gray-400">
          {user.rol} • {user.age} años
        </p> */}
        {/* <p className="text-gray-700 dark:text-gray-300 text-sm">
          {user.description}
        </p> */}
      
    </div>

  );
}
export default CardUser;
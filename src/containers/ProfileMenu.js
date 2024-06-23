import Menu from "../components/Menu";
import useProfile from "../hooks/useProfile";

const ProfileMenu = () => {
  const {
    userDetails,
    userIcon,
    toggleMenu,
    isPressed,
    setToggleMenu,
    setIsPressed,
    clickHandler,
  } = useProfile();

  return (
    <div className="absolute top-6 right-6">
      <div
        className="relative w-10 h-10 bg-gray-600 rounded-full text-center pt-2 text-white cursor-pointer"
        onClick={() => setToggleMenu((prev) => !prev)}
        style={{ transform: isPressed }}
        onMouseDown={() => setIsPressed(`scale(0.9)`)}
        onMouseUp={() => setIsPressed(`scale(1)`)}
      >
        {userIcon}
      </div>
      {toggleMenu ? (
        <Menu isPremium={true} clickHandler={clickHandler} />
      ) : null}
    </div>
  );
};

export default ProfileMenu;

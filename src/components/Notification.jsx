const Notification = () => {
  return (
    <div className="bg-redPrimary text-white flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-4 px-4 md:px-0 text-sm md:text-base font-normal">
      <div className="flex items-center justify-center gap-2">
        <img src="/icons/bolt.svg" alt="bolt icon" />
        <p>UNLOCK THE PRE-RACE PASTE</p>
      </div>
      <p className="text-center md:text-left">
        Find the sprint to be finish! 1 FREE with a 7 pack
      </p>
    </div>
  );
};

export default Notification;

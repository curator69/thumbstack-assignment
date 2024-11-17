const Footer = () => {
  return (
    <div className="bg-black text-white p-6 md:p-10 lg:p-20 flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <img
            src="/icons/footer-logo.svg"
            alt="footer logo"
            className="w-16 md:w-auto"
          />
          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-semibold">
              <span className="text-redPrimary">Trust</span> in Every Scoop
            </p>
            <p className="text-sm md:text-base font-normal">
              Non-swabbale formulas for your peace of mind
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-lg md:text-xl font-bold">Quick Links</p>
            <p>Shop</p>
            <p>About</p>
            <p>Bundles</p>
            <p>Contact</p>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <p className="text-lg md:text-xl font-bold">Contact us</p>
            <p>contact@company.com</p>
            <p>(414) 687 - 5892</p>
            <p>794 Mcallister St San Francisco, 94102</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 text-sm md:text-base">
        <p>Copyright © 2024 The Trainer Locker</p>
        <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;

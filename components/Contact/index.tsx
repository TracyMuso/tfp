import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full pb-8 sm:px-16 px-6 flex flex-col gap-4 items-center"
    >
      <h2 className="xl:text-5xl lg:text-4xl sm:text-2xl text-xl">
        Get in touch
      </h2>
      <p className="sm:w-4/5 w-full md:pt-8 pb-4 text-center">
        I am looking for new opportunies and very open to collaboration on
        projects. I`d love to hear from you!
      </p>
      <div className="border border-[#e6739f] rounded-md px-2 py-5 lg:w-2/5 w-full flex flex-col gap-2 items-center">
        <div className="flex gap-2 items-center justify-between w-3/5 pt-3 pb-5">
          <Link href={"mailto:musongoletracy@gmail.com"}>
            <Image
              src={"/icons/quill_mail.svg"}
              width={50}
              height={50}
              alt="mail-icon"
            />
          </Link>
          <Link href={"https://linkedin.com/in/tracy-muso"}>
            <Image
              src={"/icons/linkedin-linked-in-svgrepo-com.svg"}
              width={40}
              height={40}
              alt="linkedin-icon"
            />
          </Link>
          <Link href={"https//github.com/TracyMuso"}>
            <Image
              src={"/Images/github-mark-orange.svg"}
              width={40}
              height={40}
              alt="github-icon"
            />
          </Link>
        </div>
        <hr className="bg-[#e6739f] w-3/4 h-[2px]" />
        <div className="flex justify-between items-center sm:w-2/3 w-full py-5">
          <div className="flex items-center">
            <Image
              src={"/icons/system-uicons_location.svg"}
              width={20}
              height={20}
              alt="location-icon"
            />
            <span className="text-pink-50 text-sm md:text-[16px]">
              Lusaka, Zambia
            </span>
          </div>
          <div className="flex items-center">
            <Image
              src={"/icons/telephone-svgrepo-com.svg"}
              width={20}
              height={20}
              alt="telephone-icon"
            />
            <Link
              href={"tel:0779431887"}
              className="pl-1 text-pink-50 text-sm md:text-[16px]"
            >
              +260779431887
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

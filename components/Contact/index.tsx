import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full pb-8 px-6 flex flex-col gap-4 items-center"
    >
      <h2 className="xl:text-5xl lg:text-4xl">Get in touch</h2>
      <p className="w-4/5 pt-8 pb-4 text-center">
        I am looking for new opportunies and very open to collaboration on
        projects. I`d love to hear from you!
      </p>
      <div className="border border-[#e6739f] rounded-md px-2 py-5 w-2/5 flex flex-col gap2 items-center">
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
              width={50}
              height={50}
              alt="linkedin-icon"
            />
          </Link>
          <Link href={"https//github.com/TracyMuso"}>
            <Image
              src={"/Images/github-mark-orange.svg"}
              width={50}
              height={50}
              alt="github-icon"
            />
          </Link>
        </div>
        <hr className="bg-[#e6739f] w-3/4 h-[2px]" />
        <div className="flex justify-between items-center w-2/3 py-5">
          <div className="flex items-center">
            <Image
              src={"/icons/system-uicons_location.svg"}
              width={30}
              height={30}
              alt="location-icon"
            />
            <span className="text-pink-50">Lusaka, Zambia</span>
          </div>
          <div className="flex items-center">
            <Image
              src={"/icons/telephone-svgrepo-com.svg"}
              width={30}
              height={30}
              alt="telephone-icon"
            />
            <Link href={"tel:0779431887"} className="pl-1 text-pink-50">
              +260779431887
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

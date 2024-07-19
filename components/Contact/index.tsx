import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <h2>Get in touch</h2>
      <p>
        I am looking for new opportunies and very open to collaboration on
        projects. Please do not hesitate to reach out :) I'd love to hear from
        you!
      </p>
      <div>
        <Link href={"mailto:musongoletracy@gmail.com"}>
          <Image
            src={"/icons/quill_mail.svg"}
            width={20}
            height={20}
            alt="mail-icon"
          />
        </Link>
        <Link href={"https://linkedin.com/in/tracy-muso"}>
          <Image
            src={"/icons/linkedin-linked-in-svgrepo-com.svg"}
            width={20}
            height={20}
            alt="linkedin-icon"
          />
        </Link>
        <Link href={"https//github.com/TracyMuso"}>
          <Image
            src={"/icons/github-mark-white.svg"}
            width={20}
            height={20}
            alt="github-icon"
          />
        </Link>
      </div>
      <div>
        <div>
          <Image
            src={"/icons/system-uicons_location.svg"}
            width={20}
            height={20}
            alt="location-icon"
          />
          <span>Kapiri, Zambia</span>
        </div>
        <div>
          <Image
            src={"/icons/telephone-svgrepo-com.svg"}
            width={20}
            height={20}
            alt="telephone-icon"
          />
          <span>0779431887</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

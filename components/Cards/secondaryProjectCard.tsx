import Image from "next/image";

const secondaryProjectCard = () => {
  return (
    <div>
      <Image
        src={"/Images/sth.png"}
        width={300}
        height={320}
        alt="project ui"
      />
      <div>
        <h4>Other project</h4>
        <p>desription</p>
        <hr />
        <div>
          <span>tag1</span>
          <span>tag1</span>
          <span>tag1</span>
        </div>
        <div>
          <button>See live</button>
          <button>source code</button>
        </div>
      </div>
    </div>
  );
};

import BlurImage from "./_components/blur-image";
import ZooClient from "./_components/zoo-client";

export const runtime = "edge";

export default function OurZoo() {
  const imageUrls =
    [
      'https://utfs.io/f/bb5c6789-938f-4763-acf3-f44e4e9d13fb-1xbsex.jpeg',
      'https://uploadthing.com/f/ead04ba3-ccb1-4d0a-8dcc-c88323d9647d-1x9f0o.jpeg',
      'https://uploadthing.com/f/74780f32-a54f-4069-948d-2d6523276f93-1xbbwi.jpeg',
      'https://uploadthing.com/f/0d2a2962-fbc7-4ba0-83fb-6cd8edb9fb98-1x9f2d.jpeg',
      'https://uploadthing.com/f/983e8b83-1c66-4d70-b094-9943d4fd7ac2-1xbs8v.jpeg',
      'https://uploadthing.com/f/b060ec8d-b545-4b09-8744-0d5841a6a001-1xbs7v.jpeg',
      'https://uploadthing.com/f/d8a7c78d-385c-4426-91b6-5ce7a68099b6-1xbc0x.heic',
      'https://uploadthing.com/f/9048dae6-f343-4316-b201-b4b55236ef72-1x9f1j.jpeg',
      'https://uploadthing.com/f/68c2ddca-7a89-4e54-b900-5bd1e35de678-1xbc00.jpeg',
      'https://uploadthing.com/f/7c3de36d-31e1-4cb7-9ebe-cd5aebfb66ce-1xbamv.jpeg',
      'https://uploadthing.com/f/cfba4066-bade-4206-a149-4f17af49cad7-1xb9wa.heic',
      'https://uploadthing.com/f/63fd1683-0bb6-43f7-be3b-53c2d5229134-1xb90e.heic',
      'https://uploadthing.com/f/d7ec2e56-2440-49a5-8eb6-67973edd41aa-1xbsyp.jpeg',
      'https://uploadthing.com/f/be4b5f4a-4feb-4a95-9e3a-087a7f05b878-1x9v9b.jpeg'
    ];


  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        the zoo,{" "}
        <span className="text-neutral-400 font-normal">
          we love our animals!
        </span>
      </h1>

      <br />

      <p className="prose prose-neutral dark:prose-invert">
        I am fairly certain we have the oddest cats on this planet, have yet to
        check others 🚀. We take way too many damn pictures of these little
        stinkers. 🙀
      </p>

      <br />

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6">
        {imageUrls.length
          ? imageUrls.map((imageUrl, idx) => <BlurImage key={idx} imageUrl={imageUrl} />)
          : null}
      </div>
    </section>
  );
}

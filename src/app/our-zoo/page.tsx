import { getRecentImages } from "@/actions";
import BlurImage from "./_components/blur-image";
import UploadContent from "./_components/upload-content";

export default async function OurZoo() {
  const images = await getRecentImages();

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6">
        {images.length
          ? images.map((image) => <BlurImage key={image.id} image={image} />)
          : null}
      </div>

      <div className="mt-20">
        <UploadContent />
      </div>
    </div>
  );
}

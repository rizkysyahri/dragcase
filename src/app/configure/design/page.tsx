import { db } from "@/db";
import { notFound } from "next/navigation";
import DesainConfigurator from "./DesainConfigurator";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) return notFound();

  const { imageUrl, width, height } = configuration;

  return (
    <DesainConfigurator
      configId={configuration.id}
      imageUrl={imageUrl}
      imageDimensions={{
        width: width,
        height: height,
      }}
    />
  );
};

export default Page;

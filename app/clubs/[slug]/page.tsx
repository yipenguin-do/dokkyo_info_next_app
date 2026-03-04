import { clubList } from "../../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DetailPage({ params }: Props) {
  const { slug } = await params;

  const club = clubList.find(
    (club) => club.slug === slug
  );

  if (!club) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <img
        src={club.imagePath}
        alt={club.name}
        className=""
    />
      <h1>{club.name}</h1>
      <p>{club.date}</p>
      <p>{club.explain}</p>
    </div>
  );
}
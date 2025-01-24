import ArtPiecesList from "@/components/ArtPiecesList";

export default function Favorites({ artPieces }) {
  const artPiecesInfo = [
    { slug: "orange-red-and-green", isLike: true },
    { slug: "blue-and-red", isLike: true },
    { slug: "body-of-water", isLike: false },
  ];

  const favorites = artPieces.filter((artPiece) =>
    artPiecesInfo.find(
      (artPieceInfo) =>
        artPieceInfo.slug === artPiece.slug && artPieceInfo.isLike
    )
  );

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPiecesList artPieces={favorites} />
    </div>
  );
}

import ArtPiecesList from "@/components/ArtPiecesList";

export default function Favorites({
  artPieces,
  handleToggleLike,
  artPiecesInfo,
}) {

  const favorites = artPieces.filter((artPiece) =>
    artPiecesInfo.find(
      (artPieceInfo) =>
        artPieceInfo.slug === artPiece.slug && artPieceInfo.isLike
    )
  );

  return (
    <div>
      <h1>Art Gallery</h1>

      <ArtPiecesList
        artPieces={favorites}
        handleToggleLike={handleToggleLike}
        artPiecesInfo={artPiecesInfo}
      />

    </div>
  );
}

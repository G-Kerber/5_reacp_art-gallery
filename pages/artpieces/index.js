import ArtPiecesList from "@/components/ArtPiecesList";

export default function Gallery({
  artPieces,
  handleToggleLike,
  artPiecesInfo,
}) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPiecesList
        artPieces={artPieces}
        handleToggleLike={handleToggleLike}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}

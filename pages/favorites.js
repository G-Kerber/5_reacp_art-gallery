import ArtPiecesList from "@/components/ArtPiecesList";
import Link from "next/link";

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

  if (favorites.length < 1) {
    return (
      <>
        <h1>Art Gallery</h1>
        <p>
          Es gibt keine favorisierten Kunstwerke. Bitte markieren Sie zuerst
          Kunstwerke auf den Seiten <Link href="/">Spotlight </Link>oder
          <Link href="/artpieces"> Art Pieces</Link>.
        </p>
      </>
    );
  }

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

import Link from "next/link";
import {
  StyledImage,
  StyledFigure,
  StyledCaption,
} from "../components/ArtPiece.styled";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  artPiece,
  handleToggleLike,
  isLike,
}) {
  return (
    <>
      <StyledFigure>
        <FavoriteButton
          handleToggleLike={handleToggleLike}
          isLike={isLike}
          slug={artPiece.slug}
        />
        <Link href={`/artpieces/${artPiece.slug}`}>
          <StyledImage src={artPiece.imageSource} alt={artPiece.name} fill />
        </Link>
        <StyledCaption>
          {artPiece.name} by {artPiece.artist}
        </StyledCaption>
      </StyledFigure>
    </>
  );
}

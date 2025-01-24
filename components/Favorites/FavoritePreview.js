import {
  StyledImage,
  StyledFigure,
  StyledCaption,
} from "../../components/ArtPiece.styled";

export default function ArtPiecePreview({ artPieceLike, onToggleLike }) {
  return (
    <>
      <StyledFigure>
        <StyledImage
          src={artPieceLike.imageSource}
          alt={artPieceLike.name}
          fill
        />
        <StyledCaption>
          {artPieceLike.name} by {artPieceLike.artist}
        </StyledCaption>
      </StyledFigure>
    </>
  );
}

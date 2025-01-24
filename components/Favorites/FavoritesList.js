import styled from "styled-components";
import FavoritePreview from "./FavoritePreview";

const StyledArtPieces = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

const StyledListItem = styled.li`
  width: 30rem;
  height: 30rem;
  min-width: 10rem;
`;

export default function FavoriesList({ artPiecesLike, onToggleLike }) {
  return (
    <StyledArtPieces>
      {artPiecesLike.map((artPieceLike) => (
        <StyledListItem key={artPieceLike.slug}>
          <FavoritePreview
            artPieceLike={artPieceLike}
            onToggleLike={onToggleLike}
          />
        </StyledListItem>
      ))}
    </StyledArtPieces>
  );
}

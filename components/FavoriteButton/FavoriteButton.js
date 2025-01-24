import Image from "next/image";
import { StyledFavoriteButton } from "./FavoriteButton.styled";

export default function FavoriteButton({ handleToggleLike, isLike, slug }) {
  return (
    <StyledFavoriteButton
      type="button"
      onClick={() => handleToggleLike(slug)}
      aria-label={isLike ? "Unfavorite" : "Favorite"}
    >
      <Image
        src={isLike ? "/assets/heart-filled.svg" : "/assets/heart-outline.svg"}
        alt={isLike ? "Filled Heart" : "Outlined Heart"}
        width={40}
        height={40}
      />
    </StyledFavoriteButton>
  );
}

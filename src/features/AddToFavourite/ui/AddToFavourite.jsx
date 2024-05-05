import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import favourites from "../../../widgets/FavouritesList/model/favouriteStore";
import userStore from "../../../shared/model/userStore";
import { LikeIcon } from "../../../shared/ui/LikeIcon";
import { DislikeIcon } from "../../../shared/ui/DislikeIcon";

const AddToFavourite = observer(({ item }) => {
  const navigate = useNavigate();
  const isInFavourite = favourites.favouritesItems.some(
    (favourite) => favourite.id == item.id
  );

  return (
    <>
      {isInFavourite ? (
        <DislikeIcon onRemove={() => favourites.removeFromFavourite(item.id)} />
      ) : (
        <LikeIcon
          onAddFavorite={
            userStore.isAuth
              ? () => favourites.addToFavourite(item)
              : () => navigate("/login")
          }
        />
      )}
    </>
  );
});

export { AddToFavourite };

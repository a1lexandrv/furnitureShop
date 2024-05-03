import { observer } from "mobx-react-lite";

import cartStore from "../../../shared/model/cartStore";
import { RemoveIcon } from "../../../shared/ui/RemoveIcon/ui/RemoveIcon";

const RemoveFromCart = observer(({ id }) => {
  return <RemoveIcon onClick={() => cartStore.removeFromCart(id)} />;
});

export { RemoveFromCart };

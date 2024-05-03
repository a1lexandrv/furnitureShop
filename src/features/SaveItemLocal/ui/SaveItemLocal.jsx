import { useEffect, useState } from "react";
import { items } from "../../../app/api/items-data";
import { useParams } from "react-router-dom";

export default function SaveItemLocal() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const item = items.filter((item) => item.id == id);

    setItem(item);
  }, [id]);
  return item;
}

export { SaveItemLocal };

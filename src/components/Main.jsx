import { useEffect, useState } from "react";
import axios from "axios";
import ListCardUsers from "./Cards/ListCardUsers";

function Main() {
    const [users, serUsers] = useState([]);

    useEffect(() => {
        axios.get("data/users.json")
            .then((res) => { serUsers(res.data) })
            .catch((err) => console.error("Error al cargar usuarios:", err));
    }, []);
    return (
        <main className="flex-1 w-full">
            <ListCardUsers users={users} />
        </main>
    );
}
export default Main;
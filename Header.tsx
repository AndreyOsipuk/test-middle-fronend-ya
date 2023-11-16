import Avatar from "@components/Avatar";
import { useEffect, useState } from 'react';
import UserAPI from "@api/UserAPI";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserAPI.fetchUser().then((userData) => {
      setUser(userData);
    });
  });

  return (
    <div className="Header">
      <Avatar user={user} />
    </div>
  );
}
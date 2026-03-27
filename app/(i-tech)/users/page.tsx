import UserDisplay from "@/components/i-tech-cards/users";
import { UserResponse } from "@/lib/type/user-response";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function UsersPage() {
  const res = await fetch(`${API_URL}/users`);

  const data = await res.json();

  console.log("API Response:", data);
  const users: UserResponse[] = data.payload || data.content || data || [];

  console.log(users);
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.isArray(users) ? (
        users.map((member, index) => (
          <UserDisplay
            name={member.name}
            role={member.role}
            avatar={member.avatar}
            key={index}
          />
        ))
      ) : (
        <p>No users found or invalid data format.</p>
      )}
    </div>
  );
}

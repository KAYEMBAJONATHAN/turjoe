import {
  sql,
  createClient,
  VercelClient,
  createPool,
  VercelPool,
} from "@vercel/postgres";

export async function seed() {
  try {
    // Create the users and contact tables if they don't already exist
    const createTables = await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        image VARCHAR(255),
        password VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS contact (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        message VARCHAR(255)
      );
    `;
    console.log(`Created "users" and "contact" tables`);

    // Insert user records
    const users = await Promise.all([
      sql`
        INSERT INTO users (name, email, image, password)
        VALUES ('Guillermo Rauch', 'rauchg@vercel.com', 'https://images.ctfassets.net/e5382hct74si/2P1iOve0LZJRZWUzfXpi9r/9d4d27765764fb1ad7379d7cbe5f1043/ucxb4lHy_400x400.jpg', 'user1')
        ON CONFLICT (email) DO NOTHING;
      `,
      sql`
        INSERT INTO users (name, email, image, password)
        VALUES ('Lee Robinson', 'lee@vercel.com', 'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg', 'user2')
        ON CONFLICT (email) DO NOTHING;
      `,
      sql`
        INSERT INTO users (name, email, image, password)
        VALUES ('Steven Tey', 'stey@vercel.com', 'https://images.ctfassets.net/e5382hct74si/4QEuVLNyZUg5X6X4cW4pVH/eb7cd219e21b29ae976277871cd5ca4b/profile.jpg', 'user3')
        ON CONFLICT (email) DO NOTHING;
      `,
    ]);
    console.log(`Seeded ${users.length} users`);

    const contacts = await Promise.all([
      sql`
        INSERT INTO contact (name, email, message)
        VALUES ('John Doe', 'john@example.com', 'Hello, I am interested in your services.')
        ON CONFLICT (email) DO NOTHING;
      `,
      sql`
        INSERT INTO contact (name, email, message)
        VALUES ('Jane Smith', 'jane@example.com', 'I would like more information about your pricing.')
        ON CONFLICT (email) DO NOTHING;
      `,
      sql`
        INSERT INTO contact (name, email, message)
        VALUES ('Sam Brown', 'sam@example.com', 'Please send me more details about the project timelines.')
        ON CONFLICT (email) DO NOTHING;
      `,
    ]);
    
    console.log(`Inserted ${contacts.length} contact records`);
    

    // Retrieve all users from the database
    const allUsers = await sql`
      SELECT * FROM users;
    `;
    console.log("Retrieved users:", allUsers);

    return {
      createTables,
      users,
      allUsers,
    };
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
}

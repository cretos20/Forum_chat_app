# 🧵 Forum Chat App

A real-time, topic-based forum chat application where users can join discussions on various technologies like Python, JavaScript, React, and more. Built using **Next.js (App Router)** with **Clerk.dev** for authentication and **Stream** for scalable chat infrastructure.

---

## 🚀 Demo Link

🔗 [Click to Open](https://forum-chat-app-git-main-cretos20s-projects.vercel.app)

---

## 📌 Key Features

- 🔒 **User Authentication** with Clerk (Sign In / Sign Up / Sign Out)
- 💬 **Real-Time Chat** powered by Stream's scalable chat API
- 🧠 **Topic-Based Forums** like Python, JavaScript, React, CSS, Web Dev
- 🔁 **Webhook Integration**: On user sign-up, a Clerk webhook creates a Stream token and adds the user to all channels
- 🎨 **Responsive UI** styled with Tailwind CSS
- 🔗 **Channel Persistence**: Each topic is a dedicated Stream channel

---

## 🧰 Tech Stack

| Technology      | Usage                                 |
|-----------------|----------------------------------------|
| **Next.js**     | App structure, SSR/CSR, routing        |
| **Clerk**       | Authentication & user management       |
| **Stream Chat** | Chat backend, channels, token creation |
| **Tailwind CSS**| Styling and responsiveness             |
| **ngrok** (dev) | Local testing of Clerk webhook         |

---

## 🔄 Webhook Flow

1. A new user signs up via Clerk.
2. Clerk sends a webhook to `/api/createUser`.
3. The server:
   - Generates a **Stream chat token**
   - Creates/join topic channels for the user
   - Stores the token in `publicMetadata` of the Clerk user
4. The frontend fetches the user and token using `currentUser()` and connects them to their channels.

---

## 🧪 Local Development Setup

### 1. Clone the repo

git clone https://github.com/cretos20/Forum_chat_app.git
cd Forum_chat_app

### 2. Install dependencies

npm install

### 3. Set environment variables

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

### 4. Run locally

npm run dev





# Vue Boolzapp

Vue Boolzapp is a single-page application (SPA) inspired by modern messaging platforms. Built using Vue.js, it provides a dynamic and interactive chat interface where users can send and receive messages, search through conversations, and enjoy a seamless messaging experience. This project serves as a showcase of Vue.js features and a demonstration of building responsive and user-friendly UIs.

## Table of Contents

- [Dependencies](#dependencies)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Services](#services)
- [Milestones](#milestones)
- [Contributing](#contributing)

## Dependencies

The project is built with the following key technologies:

- **Vue.js (v2.6.11)**: Core framework for building the SPA.
- **Bootstrap (v4.6.0)**: For responsive design and layout.
- **Axios (v0.21.1)**: For handling HTTP requests (optional for future API integration).
- **FontAwesome**: For sleek and intuitive icons.

## Features

1. **Dynamic Chat Interface**:
   - Real-time messaging simulation with user and bot conversations.
   - Each chat includes timestamps for sent and received messages.

2. **Search Functionality**:
   - Filter conversations by contact name in real-time.

3. **Responsive Design**:
   - Adapts seamlessly across devices, ensuring usability on desktops, tablets, and mobile phones.

4. **Message Management**:
   - Send new messages and receive automated replies from contacts.
   - Delete individual messages or entire conversations.

5. **Conversation List**:
   - Displays active chats with the latest message preview and timestamps.

6. **Theming Options** (Optional Future Enhancement):
   - Support for light and dark mode for enhanced user experience.

## Environment Variables

The project does not require specific environment variables for local development. However, if integrating an API or external services in the future, consider adding a `.env` file to manage configuration values.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/EmilioGall/vue-boolzapp.git
   cd vue-boolzapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run serve
   ```

4. Open the application in your browser:
   ```
   http://localhost:8080
   ```

## Services

The current version of Vue Boolzapp does not integrate external services. Future iterations could include:

- **Firebase**: For real-time database and authentication.
- **Chatbot APIs**: For more intelligent bot interactions.

## Milestones

1. **Core Messaging Features**:
   - Implement dynamic message sending and receiving.
   - Automate bot replies for a realistic chat simulation.

2. **Search and Filters**:
   - Add a search bar for filtering chats by contact name.

3. **Message/Chat Deletion**:
   - Allow users to delete individual messages and entire chats.

4. **Responsive Design Enhancements**:
   - Optimize UI for various screen sizes.

5. **Theming Options** (Stretch Goal):
   - Add light/dark mode toggle functionality.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

For more details, visit the [GitHub repository](https://github.com/EmilioGall/vue-boolzapp).

---

Happy coding!

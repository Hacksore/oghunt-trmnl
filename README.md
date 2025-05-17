# oghunt-trmnl

A TRMNL plugin that displays the top three product launches from [Product Hunt](https://www.producthunt.com) without AI-generated content. This project uses [oghunt.com](https://oghunt.com), a service that provides a clean view of Product Hunt projects without AI-generated content.

![image](https://github.com/user-attachments/assets/342fee15-8422-47dd-87a0-f905d8c3dc3b)

## Features

- Shows top 3 Product Hunt launches
- Filters out AI-generated content
- Terminal-based interface
- Real-time updates

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)
- Docker (optional, for containerized development)

## Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/oghunt-trmnl.git
cd oghunt-trmnl
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm start
```

4. View the simulator:
Open your browser and navigate to [http://127.0.0.1:4567/full](http://127.0.0.1:4567/full) to see the plugin in action.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## About oghunt.com

This project uses [oghunt.com](https://oghunt.com) as its data source. oghunt.com is a service that provides a clean view of Product Hunt projects, filtering out AI-generated content to help you discover genuine product launches.

## License

[MIT](https://choosealicense.com/licenses/mit/)
